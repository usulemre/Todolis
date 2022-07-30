function page(page) {
  const PageItem = 10;
  const totalPage = Math.ceil(page.length / PageItem);
  const newArryPage = Array.from({ length: totalPage }, (_, index) => {
    const start = index * PageItem;
    return page.slice(start, start + PageItem);
  });
  return newArryPage;
}

export default page;
