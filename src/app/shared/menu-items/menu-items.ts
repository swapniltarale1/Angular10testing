import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'Transactions', type: 'link', name: 'Transactions', icon: 'crop_7_5' },
  { state: 'Settlements', type: 'link', name: 'Settlements', icon: 'crop_7_5' },
  { state: 'Refunds', type: 'link', name: 'Refunds', icon: 'crop_7_5' },
  { state: 'Dispute', type: 'link', name: 'Dispute', icon: 'crop_7_5' },
  { state: 'Service Alert', type: 'link', name: 'Service Alert', icon: 'crop_7_5' },
  { state: 'Payment Links', type: 'link', name: 'Payment Links', icon: 'crop_7_5' },
  { state: 'Payment pages', type: 'link', name: 'Payment pages', icon: 'crop_7_5' },
  { state: 'setting', type: 'link', name: 'Setting', icon: 'crop_7_5' },
  { state: 'My Profile', type: 'link', name: 'My Profile', icon: 'crop_7_5' },
  { state: 'Manage Team', type: 'link', name: 'Manage Team', icon: 'crop_7_5' },

];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
