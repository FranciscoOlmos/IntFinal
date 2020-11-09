var app = new Vue({
  el: "#store",
  data: {
    addName: "",
    addType: "",
    addPrice: "",
    addBrand: "",
    addImg: "",
    showForm: false,
    emptyStore: false,
    showItem: false,
    cart: [],
    item: {},

    instruments: [
      {
        noImg: false,
        name: "Guitar",
        type: "Percussin",
        price: "99",
        brand: "Fender",
        img:
          "https://images.reverb.com/image/upload/s--GeP-rRbE--/f_auto,t_supersize/v1571422898/rpffkol2mmhifpqfewrd.jpg"
      },

      {
        noImg: false,
        name: "Violin",
        type: "String",
        price: "150",
        brand: "Fender",
        img:
          "https://www.electricviolinshop.com/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/c/c/ccvnaex-4-44-si-frnt.jpg"
      },

      {
        noImg: false,
        name: "Flute",
        type: "Yamaha",
        price: "100",
        brand: "Yamaha",
        img:
          "https://i.pinimg.com/originals/63/18/a3/6318a36816617ada06afc40543568bc2.jpg"
      },
      
      {
        noImg: false,
        name: "Drums",
        type: "Brass",
        price: "2000",
        brand: "Yamaha",
        img:
          "https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/1136806_33925_popup.jpg"
      },
      
      {
        noImg: false,
        name: "Acoustuc Guiter",
        type: "Percussin",
        price: "300",
        brand: "Maton",
        img:
          "https://www.heidmusic.com/assets/1/14/DimRegular/F3HC_full.PNG"
      },
      
      {
        noImg: false,
        name: "Saxophone",
        type: "Air",
        price: "180",
        brand: "Maton",
        img:
          "https://www.dhresource.com/0x0/f2/albu/g1/M01/4B/D1/rBVaGFXpDCSASSJnAAaiRoHzlfw766.jpg"
      }
    ]
  },
  
  methods: {
    addToCart: function (instrument, index) {
      this.cart.push(instrument);
      this.instruments.splice(index, 1);
    },

    removeItems: function () {
      this.instruments = this.instruments.concat(this.cart);
      this.cart = [];
    },
    
    instrumentDetail: function (instrument) {
      this.showItem = true;
      this.item = instrument;
    },
    
    exitForm: function () {
      this.showForm = false;
      this.addName = "";
      this.addType = "";
      this.addPrice = "";
      this.addBrand = "";
    },
    
    newInstrument: function () {
      this.instruments.push({
        name: this.addName,
        type: this.addType,
        price: this.addPrice,
        brand: this.addBrand,
        img: this.addImg,
        noImg: true
      });

      (this.addName = ""),
        (this.addType = ""),
        (this.addPrice = ""),
        (this.addBrand = ""),
        (this.showForm = false);
    }
  },

  watch: {
    instruments: function () {
      if (this.instruments.length <= 0) {
        this.emptyStore = true;
      } else {
        this.emptyStore = false;
      }
    }
  }
});