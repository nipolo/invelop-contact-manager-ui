export const uiRoutes = {
  contactsModule: {
    base: 'contacts',
    routes: {
      allContacts: 'all',
      addContact: 'add',
      updateContact: 'update/:id',
    },
  },
};

export const uiUrls = {
  allContacts: '/contacts/all',
  addContact: '/contacts/add',
  updateContact: '/contacts/update/:id',
};
