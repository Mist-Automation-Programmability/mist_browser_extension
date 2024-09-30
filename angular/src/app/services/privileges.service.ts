import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SessionElement } from './browser.service';

export interface OrgElement {
    org_id: string,
    name: string,
    role: string
}
export interface MspElement {
    msp_id: string,
    name: string,
    role: string
}

export interface PrivilegeElement {
    msp_id: string | undefined,
    msp_logo_url: string | undefined,
    msp_name: string | undefined,
    msp_url: string | undefined,
    name: string,
    org_id: string | undefined,
    org_name: string | undefined,
    orggroup_ids: string[],
    role: string,
    scope: string,
    site_id: string | undefined,
    sitegroup_ids: string[] | undefined
}

@Injectable({
    providedIn: 'root'
})
export class PrivilegeService {
    private privilegeSource = new BehaviorSubject<PrivilegeElement[]>([]);
    privileges = this.privilegeSource.asObservable();

    roles = ["admin", "write", "read", "helpdesk", "installer"];


    constructor(private _http: HttpClient) { }

    setPrivileges(privileges: PrivilegeElement[]): void {
        this.privilegeSource.next(privileges);
    }

    getMspsPrivileges(min_role: string | undefined): MspElement[] {
        var msps: MspElement[] = [];
        this.privilegeSource.value.forEach(privilege => {
            if (privilege.hasOwnProperty("msp_id") && !msps.find(m => m.msp_id == privilege.msp_id)) {
                if (privilege.scope == "msp" && this.checkRole(min_role, privilege.role)) {
                    msps.push({ msp_id: privilege.msp_id, name: privilege.name, role: privilege.role })
                }
            }
        })
        return this.sort_msps(msps);
    }

    getOrgsPrivileges(session: SessionElement, msp_id: string | undefined, min_role: string | undefined, cb:CallableFunction): void {
        const not_msp_id: string[] = ["none", "00000000-0000-0000-0000-000000000000"];
        if (!msp_id || not_msp_id.includes(msp_id) ) this.getOrgNotInMsp(min_role, cb);
        else this.getOrgsInMsp(session, msp_id, min_role, cb);
    }

    private getOrgNotInMsp(min_role: string, cb:CallableFunction): void {
        var orgs: OrgElement[] = [];
        this.privilegeSource.value.forEach(privilege => {
            if (privilege.scope == "org" && this.checkRole(min_role, privilege.role)) {
                if (!privilege.msp_id || ! this.privilegeSource.value.find(p => p.scope == "msp" && p.msp_id == privilege.msp_id)){
                orgs.push({ org_id: privilege.org_id, name: privilege.name, role: privilege.role });
            }
            }
        })
        cb(this.sort_orgs(orgs));
    }

    private checkIfOrgOverride(org_id: string): string | undefined {
        var privilege = this.privilegeSource.value.find(p => p.org_id == org_id);
        if (privilege) return privilege.role;
        return null;
    }

    private getOrgsInMsp(session: SessionElement, msp_id: string, min_role: string, cb:CallableFunction): void {
        var orgs: OrgElement[] = [];
        const msp_role = this.privilegeSource.value.find(p => p.msp_id == msp_id && p.scope == "msp").role;
        let url = "https://" + session.api_host + "/api/v1/msps/" + msp_id + "/orgs"
        this._http.get(url, { headers: { "X-CSRFTOKEN": session.csrftoken } }).subscribe((orgs_from_mist: any[]) => {
            orgs_from_mist.forEach(org => {
                var org_role = this.checkIfOrgOverride(org.id);
                if (!org_role) org_role = msp_role;
                if (this.checkRole(min_role, org_role)) {
                    orgs.push({
                        org_id: org.id,
                        name: org.name,
                        role: org_role
                    })
                }
            })
            cb(this.sort_orgs(orgs));
        })
    }

    private checkRole(min_role: string, entity_role: string): boolean {
        const min_role_index = this.roles.indexOf(min_role);
        const entity_role_index = this.roles.indexOf(entity_role);
        return min_role_index <= entity_role_index;
    }

    private sort_msps(msps: MspElement[]): MspElement[] {
        return msps.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            else return 0
        });
    }
    private sort_orgs(orgs: OrgElement[]): OrgElement[] {
        return orgs.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            else return 0
        });
    }

}