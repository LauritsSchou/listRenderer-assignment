function construct(list, container, itemRenderer) {
  const ListRenderer = {
    render() {
      for (const item of list) {
        const html = itemRenderer.render(item);
        this.container.insertAdjacentHTML("beforeend", html);
      }
    },
  };
  return ListRenderer;
}

export { construct };
