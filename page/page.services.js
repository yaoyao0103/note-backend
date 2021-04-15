import Pages from './page.modal';

export const createPage = async (pageBody) => {};
export const listPages = async () => {
  const pages = await Pages.find({});
  console.log('pages :>> ', pages);
  return pages;
};
export const deletePage = async (pageId) => {};
export const updatePage = async (pageId, pageBody) => {};
export const pageDetails = async (pageId) => {};
export const savePageContent = async (pageId, pageContent) => {};
