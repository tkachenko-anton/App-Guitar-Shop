class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = '';
  }

  render(){
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sumlCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
          <tr>
            <td class="shopping-element__name">⚡️ ${name}</td>
            <td class="shopping-element__price">${price.toLocaleString()} BTC</td>
          </tr>
        `;
        sumlCatalog += price;
      }
    });

    const html = `
    <div class="shopping-container">
      <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
      <table>
        ${htmlCatalog}
        <tr>
        <td class="shopping-element__name">😎 Total-yeah:</td>
        <td class="shopping-element__price">${sumlCatalog.toLocaleString()} BTC</td>
      </tr>
      </table>
    </div>
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
