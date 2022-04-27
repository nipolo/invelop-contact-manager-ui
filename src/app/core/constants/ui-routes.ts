export const uiRoutes = {
  contactsModule: {
    base: 'contacts',
    routes: {
      allContacts: 'all',
      addContact: 'add',
      updateContact: { base: 'update', withParams: 'update/:id' },
    },
  },
};

export const absoluteUIUrls = {
  allContacts: '/contacts/all',
  addContact: '/contacts/add',
  updateContact: {
    base: '/contacts/update',
    withParams: '/contacts/update/:id',
  },
};
