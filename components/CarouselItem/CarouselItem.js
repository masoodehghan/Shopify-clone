const template = document.createElement("template");
template.innerHTML = `
   <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
    />

    <link rel="stylesheet" href="css/nivo-slider.css" type="text/css" />
    <link rel="stylesheet" href="owlcarousel/assets/owl.carousel.css" />
    <link rel="stylesheet" href="owlcarousel/assets/owl.theme.default.css" />
    <link rel="stylesheet" href="css/body.css" type="text/css" />
    <link rel="stylesheet" href="css/header.css" type="text/css" />
    <link rel="stylesheet" href="css/columns.css" type="text/css" />

    <link rel="stylesheet" href="css/slider.css" type="text/css" />

<div class="item">
                                  <div
                                    class="product_block wow fadeIn animated"
                                    data-wow-delay="400ms"
                                  >
                                    <div
                                      class="product-container text-left product-block"
                                    >
                                      <div
                                        class="product-image-container image"
                                      >
                                        <a
                                          class="product_img_link"
                                          href="/products/allegra-k-women-short-sleeve-stripe-drawstring-mini-tee-dresses-with-pockets"
                                          
                                        >
                                          <img
                                            class="replace-2x img-responsive"
                                            src=""
                                    
                                          />

                                          <span
                                            class="product-additional"
                                            data-idproduct="1523695044"
                                          >
                                            <img
                                              class="replace-2x img-responsive"
                                        
                                              src=""
                                            />
                                          </span>
                                        </a>
                                      </div>
                                      <div class="product-meta">
                                        <h5 class="name">
                                          <a
                                            class="product-name"
                                            href="/products/allegra-k-women-short-sleeve-stripe-drawstring-mini-tee-dresses-with-pockets"
                                            
                                            >
                                          >
                                        </h5>
                                        <div class="product-desc">
                                          Fashion has been creating
                                          well-designed collections since 2010.
                                          The brand offers feminine designs
                                          delivering stylish separates and
                                          statement dresses which...
                                        </div>

                                        <div class="review">
                                          <span
                                            class="shopify-product-reviews-badge"
                                            data-id="1523695044"
                                          ></span>
                                        </div>

                                        <div class="content_price">
                                          <span class="price product-price">
                                            <span
                                              class="money"
                                              data-currency-usd="$53.60"
                                              >$53.60</span
                                            >
                                          </span>
                                        </div>
                                        <div
                                          class="functional-buttons clearfix"
                                        >
                                          <div class="cart">
                                            <div class="action">
                                              <form
                                                action="/cart/add"
                                                method="post"
                                                enctype="multipart/form-data"
                                                class="form-ajaxtocart"
                                              >
                                                <input
                                                  type="hidden"
                                                  name="id"
                                                  value="5465196164"
                                                />

                                                <a
                                                  class="button ajax_addtocart"
                                                  href="/products/allegra-k-women-short-sleeve-stripe-drawstring-mini-tee-dresses-with-pockets"
                                                  
                                                >
                                                  <span
                                                    class="zmdi zmdi-shopping-cart-plus"
                                                  ></span>
                                                  <span class="select_options"
                                                    >Select options</span
                                                  >
                                                </a>
                                              </form>
                                            </div>
                                          </div>

                                          <div class="wishlist">
                                            <a
                                              class="btn btn-outline-inverse btn-wishlist"
                                              href="/account/login"
                                            >
                                              <i class="fa fa-heart-o"></i>
                                              <span>Add to Wishlist</span>
                                            </a>
                                          </div>

                                          <div class="view_detail">
                                            <a
                                              class="btn btn-outline-inverse lnk_view"
                                              href="/products/allegra-k-women-short-sleeve-stripe-drawstring-mini-tee-dresses-with-pockets"
                                              title="View"
                                            >
                                              <i
                                                class="zmdi zmdi-plus-circle-o"
                                              ></i
                                              ><span>View product</span>
                                            </a>
                                          </div>

                                          <div class="quickview">
                                            <a
                                              class="quick-view"
                                              href="#quick-view-product"
                                              data-handle="allegra-k-women-short-sleeve-stripe-drawstring-mini-tee-dresses-with-pockets"
                                              title="Quick View"
                                            >
                                              <i class="fa fa-plus"></i>
                                              <span>Quick View</span>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
`;

class CarouselItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    let baseTitle = this.getAttribute("base-title");
    let name = this.shadowRoot.querySelector("h5 a");
    let images = this.shadowRoot.querySelector('.product_img_link').children;
    images[0].src = this.getAttribute("main-image");
    images[0].alt = baseTitle;
    images[1].children[0].src = this.getAttribute("hidden-image");
    images[1].children[0].alt = baseTitle;
    
    console.log(images);
    name.innerHTML = baseTitle
  }
  static observedAttribiutes() {
    return ["base-title", "main-image", "hidden-image"];
  }
}

export { CarouselItem };
