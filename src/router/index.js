import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  },
  {
    path: '/pms',
    component: Layout,
    redirect: '/pms/product',
    name: 'pms',
    meta: {title: '商品', icon: 'product'},
    children: [{
      path: 'product',
      name: 'product',
      component: () => import('@/views/pms/product/index'),
      meta: {title: '商品列表', icon: 'product-list'}
    },
      {
        path: 'addProduct',
        name: 'addProduct',
        component: () => import('@/views/pms/product/add'),
        meta: {title: '添加商品', icon: 'product-add'}
      },
      {
        path: 'updateProduct',
        name: 'updateProduct',
        component: () => import('@/views/pms/product/update'),
        meta: {title: '修改商品', icon: 'product-add'},
        hidden: true
      },
      {
        path: 'productRecycle',
        name: 'productRecycle',
        component: () => import('@/views/pms/product/index'),
        meta: {title: '商品回收站', icon: 'product-recycle'},
        hidden: true
      },
      {
        path: 'productComment',
        name: 'productComment',
        component: () => import('@/views/pms/product/index'),
        meta: {title: '商品评价', icon: 'product-comment'},
        hidden: true
      },
      {
        path: 'productCate',
        name: 'productCate',
        component: () => import('@/views/pms/productCate/index'),
        meta: {title: '商品分类', icon: 'product-cate'}
      },
      {
        path: 'addProductCate',
        name: 'addProductCate',
        component: () => import('@/views/pms/productCate/add'),
        meta: {title: '添加商品分类'},
        hidden: true
      },
      {
        path: 'updateProductCate',
        name: 'updateProductCate',
        component: () => import('@/views/pms/productCate/update'),
        meta: {title: '修改商品分类'},
        hidden: true
      },
      {
        path: 'productAttr',
        name: 'productAttr',
        component: () => import('@/views/pms/productAttr/index'),
        meta: {title: '商品类型', icon: 'product-attr'}
      },
      {
        path: 'productAttrList',
        name: 'productAttrList',
        component: () => import('@/views/pms/productAttr/productAttrList'),
        meta: {title: '商品属性列表'},
        hidden: true
      },
      {
        path: 'addProductAttr',
        name: 'addProductAttr',
        component: () => import('@/views/pms/productAttr/addProductAttr'),
        meta: {title: '添加商品属性'},
        hidden: true
      },
      {
        path: 'updateProductAttr',
        name: 'updateProductAttr',
        component: () => import('@/views/pms/productAttr/updateProductAttr'),
        meta: {title: '修改商品属性'},
        hidden: true
      },
      {
        path: 'brand',
        name: 'brand',
        component: () => import('@/views/pms/brand/index'),
        meta: {title: '品牌管理', icon: 'product-brand'}
      },
      {
        path: 'addBrand',
        name: 'addBrand',
        component: () => import('@/views/pms/brand/add'),
        meta: {title: '添加品牌'},
        hidden: true
      },
      {
        path: 'updateBrand',
        name: 'updateBrand',
        component: () => import('@/views/pms/brand/update'),
        meta: {title: '编辑品牌'},
        hidden: true
      }
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: {title: '订单', icon: 'order'},
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/oms/order/index'),
        meta: {title: '订单列表', icon: 'product-list'}
      },
      {
        path: 'orderDetail',
        name: 'orderDetail',
        component: () => import('@/views/oms/order/orderDetail'),
        meta: {title: '订单详情'},
        hidden:true
      },
      {
        path: 'deliverOrderList',
        name: 'deliverOrderList',
        component: () => import('@/views/oms/order/deliverOrderList'),
        meta: {title: '发货列表'},
        hidden:true
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        component: () => import('@/views/oms/order/setting'),
        meta: {title: '订单设置', icon: 'order-setting'}
      },
      {
        path: 'returnApply',
        name: 'returnApply',
        component: () => import('@/views/oms/apply/index'),
        meta: {title: '退货申请处理', icon: 'order-return'}
      },
      {
        path: 'returnReason',
        name: 'returnReason',
        component: () => import('@/views/oms/apply/reason'),
        meta: {title: '退货原因设置', icon: 'order-return-reason'}
      },
      {
        path: 'returnApplyDetail',
        name: 'returnApplyDetail',
        component: () => import('@/views/oms/apply/applyDetail'),
        meta: {title: '退货原因详情'},
        hidden:true
      }
    ]
  },
  {
    path:'/sms',
    component: Layout,
    redirect: '/sms/coupon',
    name: 'sms',
    meta: {title: '营销', icon: 'sms'},
    children: [
      {
        path: 'flash',
        name: 'flash',
        component: () => import('@/views/sms/flash/index'),
        meta: {title: '秒杀活动列表', icon: 'sms-flash'}
      },
      {
        path: 'flashSession',
        name: 'flashSession',
        component: () => import('@/views/sms/flash/sessionList'),
        meta: {title: '秒杀时间段列表'},
        hidden:true
      },
      {
        path: 'selectSession',
        name: 'selectSession',
        component: () => import('@/views/sms/flash/selectSessionList'),
        meta: {title: '秒杀时间段选择'},
        hidden:true
      },
      {
        path: 'flashProductRelation',
        name: 'flashProductRelation',
        component: () => import('@/views/sms/flash/productRelationList'),
        meta: {title: '秒杀商品列表'},
        hidden:true
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/sms/coupon/index'),
        meta: {title: '优惠券列表', icon: 'sms-coupon'}
      },
      {
        path: 'addCoupon',
        name: 'addCoupon',
        component: () => import('@/views/sms/coupon/add'),
        meta: {title: '添加优惠券'},
        hidden:true
      },
      {
        path: 'updateCoupon',
        name: 'updateCoupon',
        component: () => import('@/views/sms/coupon/update'),
        meta: {title: '修改优惠券'},
        hidden:true
      },
      {
        path: 'couponHistory',
        name: 'couponHistory',
        component: () => import('@/views/sms/coupon/history'),
        meta: {title: '优惠券领取详情'},
        hidden:true
      },
      {
        path: 'brand',
        name: 'homeBrand',
        component: () => import('@/views/sms/brand/index'),
        meta: {title: '品牌推荐', icon: 'product-brand'}
      },
      {
        path: 'new',
        name: 'homeNew',
        component: () => import('@/views/sms/new/index'),
        meta: {title: '新品推荐', icon: 'sms-new'}
      },
      {
        path: 'hot',
        name: 'homeHot',
        component: () => import('@/views/sms/hot/index'),
        meta: {title: '人气推荐', icon: 'sms-hot'}
      },
      {
        path: 'subject',
        name: 'homeSubject',
        component: () => import('@/views/sms/subject/index'),
        meta: {title: '专题推荐', icon: 'sms-subject'}
      },
      {
        path: 'advertise',
        name: 'homeAdvertise',
        component: () => import('@/views/sms/advertise/index'),
        meta: {title: '广告列表', icon: 'sms-ad'}
      },
      {
        path: 'addAdvertise',
        name: 'addHomeAdvertise',
        component: () => import('@/views/sms/advertise/add'),
        meta: {title: '添加广告'},
        hidden:true
      },
      {
        path: 'updateAdvertise',
        name: 'updateHomeAdvertise',
        component: () => import('@/views/sms/advertise/update'),
        meta: {title: '编辑广告'},
        hidden:true
      }
    ]
  },
  {
    path:'/elementUI',
    component: Layout,
    redirect: '/elementUI/basic',
    name: 'elementUI',
    meta: {title: 'elementUI', icon: 'sms'},
    children: [
      {
        path: '/elementUI/basic',
        name: 'basic',
        // component: Layout,
        // redirect: '/elementUI/basic/border',
        meta: {title: 'basic', icon: 'sms-flash'},
        children: [
          {
            path: 'border',
            name: 'border',
            component: () => import('@/views/elementUI/basic/border/index'),
            meta: {title: 'border', icon: 'sms-flash'}
          },
          {
            path: 'button',
            name: 'button',
            component: () => import('@/views/elementUI/basic/button/index'),
            meta: {title: 'button', icon: 'sms-flash'}
          },
          {
            path: 'color',
            name: 'color',
            component: () => import('@/views/elementUI/basic/color/index'),
            meta: {title: 'border', icon: 'sms-flash'}
          },
          {
            path: 'containe',
            name: 'containe',
            component: () => import('@/views/elementUI/basic/containe/index'),
            meta: {title: 'containe', icon: 'sms-flash'}
          },
          {
            path: 'icon',
            name: 'icon',
            component: () => import('@/views/elementUI/basic/icon/index'),
            meta: {title: 'icon', icon: 'sms-flash'}
          },
          {
            path: 'layout',
            name: 'layout',
            component: () => import('@/views/elementUI/basic/layout/index'),
            meta: {title: 'layout', icon: 'sms-flash'}
          },
          {
            path: 'link',
            name: 'link',
            component: () => import('@/views/elementUI/basic/link/index'),
            meta: {title: 'link', icon: 'sms-flash'}
          },
          {
            path: 'typography',
            name: 'typography',
            component: () => import('@/views/elementUI/basic/typography/index'),
            meta: {title: 'typography', icon: 'sms-flash'}
          },
        ]
      },
      {
        path: '/elementUI/form',
        name: 'form',
        // component: Layout,
        // redirect: '/elementUI/form/cascader',
        meta: {title: 'element2', icon: 'sms-flash'},
        children: [
          {
            path: 'cascader',
            name: 'cascader',
            component: () => import('@/views/elementUI/form/cascader/index'),
            meta: {title: 'cascader', icon: 'sms-flash'}
          },
          {
            path: 'checkbox',
            name: 'checkbox',
            component: () => import('@/views/elementUI/form/checkbox/index'),
            meta: {title: 'checkbox', icon: 'sms-flash'}
          },
          {
            path: 'colorPicker',
            name: 'colorPicker',
            component: () => import('@/views/elementUI/form/colorPicker/index'),
            meta: {title: 'colorPicker', icon: 'sms-flash'}
          },
          {
            path: 'datePicke',
            name: 'datePicke',
            component: () => import('@/views/elementUI/form/datePicke/index'),
            meta: {title: 'datePicke', icon: 'sms-flash'}
          },
          {
            path: 'dateTimePicker',
            name: 'dateTimePicker',
            component: () => import('@/views/elementUI/form/dateTimePicker/index'),
            meta: {title: 'dateTimePicker', icon: 'sms-flash'}
          },
          {
            path: 'eform',
            name: 'eform',
            component: () => import('@/views/elementUI/form/eform/index'),
            meta: {title: 'eform', icon: 'sms-flash'}
          },
          {
            path: 'input',
            name: 'input',
            component: () => import('@/views/elementUI/form/input/index'),
            meta: {title: 'input', icon: 'sms-flash'}
          },
          {
            path: 'inputNumber',
            name: 'inputNumber',
            component: () => import('@/views/elementUI/form/inputNumber/index'),
            meta: {title: 'inputNumber', icon: 'sms-flash'}
          },
          {
            path: 'Radio',
            name: 'Radio',
            component: () => import('@/views/elementUI/form/Radio/index'),
            meta: {title: 'Radio', icon: 'sms-flash'}
          },
          {
            path: 'rate',
            name: 'rate',
            component: () => import('@/views/elementUI/form/rate/index'),
            meta: {title: 'rate', icon: 'sms-flash'}
          },
          {
            path: 'select',
            name: 'select',
            component: () => import('@/views/elementUI/form/select/index'),
            meta: {title: 'select', icon: 'sms-flash'}
          },
          {
            path: 'slider',
            name: 'slider',
            component: () => import('@/views/elementUI/form/slider/index'),
            meta: {title: 'slider', icon: 'sms-flash'}
          },
          {
            path: 'switch',
            name: 'switch',
            component: () => import('@/views/elementUI/form/switch/index'),
            meta: {title: 'switch', icon: 'sms-flash'}
          },
          {
            path: 'timePicker',
            name: 'timePicker',
            component: () => import('@/views/elementUI/form/timePicker/index'),
            meta: {title: 'timePicker', icon: 'sms-flash'}
          },
          {
            path: 'transfer',
            name: 'transfer',
            component: () => import('@/views/elementUI/form/transfer/index'),
            meta: {title: 'transfer', icon: 'sms-flash'}
          },
          {
            path: 'upload',
            name: 'upload',
            component: () => import('@/views/elementUI/form/upload/index'),
            meta: {title: 'upload', icon: 'sms-flash'}
          }
        ]
      },
      {
        path: '/elementUI/notice',
        name: 'notice',
        component: () => import('@/views/elementUI/notice/index'),
        meta: {title: '编辑广告'},
        children:[
          {
            path:'alert',
            name:'alert',
            component:() => import('@/views/elementUI/notice/alert/index'),
            meta:{title:'dslkfjlsd'}
          },
          {
            path:'loading',
            name:'loading',
            component:() => import('@/views/elementUI/notice/loading/index'),
            meta:{title:'dsf'}
          }
        ]
      },
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

