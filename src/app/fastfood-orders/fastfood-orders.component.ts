import { Component, OnInit } from '@angular/core';

type IProductGroupName = string;
type IProductSubGroupName = string;

type IProductSubgroupVariantSelectType = 'MULTI' | 'SINGLE';

interface IProductSubgroupVariant {
  name: string;
  selectType: IProductSubgroupVariantSelectType; // Tekli seçim - çoklu seçim.
}

interface IProductSubgroupItem {
  name: string;
  price: string | number;
  currency: string;
  variants?: IProductSubgroupVariant[];
}

interface IProductSubgroup {
  name: IProductSubGroupName;
  items: IProductSubgroupItem[];
}

export interface IProductGroup {
  name: IProductGroupName;
  subgroup: IProductSubgroup[];
}

@Component({
  selector: 'app-fastfood-orders',
  templateUrl: './fastfood-orders.component.html',
  styleUrls: ['./fastfood-orders.component.scss'],
})
export class FastfoodOrdersComponent implements OnInit {
  productGroups: IProductGroup[] = [
    {
      name: 'Etiketler',
      subgroup: [
        {
          name: 'Çok Satanlar',
          items: [
            {
              name: '1 Top Dondurma',
              price: 9,
              currency: 'TRY',
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

  constructor() {}

  ngOnInit(): void {}
}
