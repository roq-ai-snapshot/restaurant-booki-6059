interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Read menus', 'Create a table reservation', 'Create an order'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'Manage table reservations',
    'Manage restaurant employees',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/30b409ba-9913-4179-9e59-42db91d89a5b',
};
