export const urlRoutes = {
  getGetAllContacts: (pageNum: number, pageSize: number) =>
    `contacts/all?pageNum=${pageNum}&pageSize=${pageSize}`,
  postCreateContact: 'contacts',
  putUpdateContact: 'contacts',
  deleteRemoveContact: 'contacts',
};
