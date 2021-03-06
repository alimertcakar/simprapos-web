import { Component, OnInit } from '@angular/core';

type IProductGroupName = string;
type IProductSubGroupName = string;

type IProductSubgroupVariantSelectType = 'MULTI' | 'SINGLE' | 'REQUIRED';

interface IProductSubgroupVariant {
  name: string;
}

export interface IProductSubgroupItem {
  name: string;
  price: string | number;
  currency: string;
  variants?: IProductSubgroupVariant[];
  selectType?: IProductSubgroupVariantSelectType[]; // Tekli seçim - çoklu seçim.
}

interface IProductSubgroup {
  name: IProductSubGroupName;
  items: IProductSubgroupItem[];
}

export interface IProductGroup {
  name: IProductGroupName;
  hasIcon: boolean;
  subgroup: IProductSubgroup[];
}

@Component({
  selector: 'app-fastfood-orders',
  templateUrl: './fastfood-orders.component.html',
  styleUrls: ['./fastfood-orders.component.scss'],
})
export class FastfoodOrdersComponent implements OnInit {
  activeIndex: number = 0;
  editMode: boolean = false;
  /*
   *  Mobile navigation active tab
   */
  activeMenuTab: number = 0;
  orders: IProductSubgroupItem[] = [];

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  scrollToTab(tabIndex: number) {
    switch (tabIndex) {
      case 0:
        document.querySelector('.orders-top-container')!.scrollTo(0, 0);
        break;
      case 1:
        document.querySelector('.orders-top-container')!.scrollTo(500, 0);
        break;
      default:
        document.querySelector('.orders-top-container')!.scrollTo(0, 0);
        break;
    }
  }

  setActiveMenuTab(index: number) {
    this.scrollToTab(index);
    this.activeMenuTab = index;
  }

  /* MOCK DATA */
  // 1 Adet Özel Maraş Dondurması Spesyal Uzun isim testi...
  productGroups: IProductGroup[] = [
    {
      name: 'Etiketler',
      hasIcon: true,
      subgroup: [
        {
          name: 'Çok Satanlar',
          items: [
            {
              name: '1 Top Dondurma',
              price: 9,
              currency: 'TRY',
              variants: [
                {
                  name: 'Çikolata',
                },
                {
                  name: 'Karamel',
                },
                {
                  name: 'Kaymak',
                },
                {
                  name: 'Limon',
                },
              ],
              selectType: ['MULTI', 'REQUIRED'],
            },
            {
              name: 'Cola',
              price: 3,
              currency: 'TRY',
            },
            {
              name: 'Hamburger',
              price: 12,
              currency: 'TRY',
            },
            {
              name: 'Sebze Çorbası',
              price: 6,
              currency: 'TRY',
            },
            {
              name: 'Su',
              price: 2,
              currency: 'TRY',
            },
          ],
        },
      ],
    },
    {
      name: 'İçecekler',
      hasIcon: false,
      subgroup: [
        {
          name: 'Sıcak İçecekler',
          items: [
            {
              name: 'Americano',
              price: 4,
              currency: 'TRY',
            },
            {
              name: 'Caffe Latte',
              price: 3,
              currency: 'TRY',
            },
            {
              name: 'Espresso',
              price: 3.5,
              currency: 'TRY',
            },
          ],
        },
        {
          name: 'Soğuk İçecekler',
          items: [
            {
              name: 'Cola',
              price: 3,
              currency: 'TRY',
            },
            {
              name: 'Cola Light',
              price: 3,
              currency: 'TRY',
            },
            {
              name: 'Cola Zero',
              price: 3,
              currency: 'TRY',
            },
            {
              name: 'Su',
              price: 2,
              currency: 'TRY',
            },
          ],
        },
      ],
    },
    {
      name: 'Yiyecekler',
      hasIcon: false,
      subgroup: [
        {
          name: 'Ana Yemekler',
          items: [
            {
              name: 'Americano',
              price: 4,
              currency: 'TRY',
            },
            {
              name: 'Caffe Latte',
              price: 3,
              currency: 'TRY',
            },
            {
              name: 'Espresso',
              price: 3.5,
              currency: 'TRY',
            },
          ],
        },
        {
          name: 'Çorbalar',
          items: [
            {
              name: 'Domates Çorbası',
              price: 6,
              currency: 'TRY',
            },
            {
              name: 'Sebze Çorbası',
              price: 6,
              currency: 'TRY',
            },
          ],
        },
        {
          name: 'Tatlılar',
          items: [
            {
              name: '1 Top Dondurma',
              price: 9,
              currency: 'TRY',
            },
            {
              name: 'Tiramusu',
              price: 7.5,
              currency: 'TRY',
            },
          ],
        },
      ],
    },
  ];

  addOrder(order: any) {
    this.orders.push(order);
  }

  constructor() {}

  ngOnInit(): void {}
}
