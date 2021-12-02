const permissions = {
    "user-manager": {
        "create-user": "ساخت کاربر",
        "read-user": "خواندن کاربر",
        "update-user": "بروزرسانی کاربر",
        "delete-user": "حذف کاربر",
        "change-access-user": "تغییر دسترسی های کاربر"
    },
    "store-manager": {
        "create-store": "ساخت فروشگاه",
        "read-store": "خواندن فروشگاه",
        "update-store": "بروزرسانی فروشگاه",
        "delete-store": "حذف فروشگاه"
    },
    "gateway-manager": {
        "create-gateway": "ساخت درگاه",
        "read-gateway": "خواندن درگاه",
        "update-gateway": "بروزرسانی درگاه",
        "delete-gateway": "حذف درگاه",
        "manage-port": "مدیریت پورت ها"
    },
    "customer-manager": {
        "create-customer": "ساخت مشتری",
        "read-customer": "خواندن مشتری",
        "update-customer": "بروزرسانی مشتری",
        "delete-customer": "حذف مشتری"
    },
    "order-manager": {
        "create-order": "ساخت سفارش",
        "read-order": "خواندن سفارش",
        "update-order": "بروزرسانی سفارش",
        "delete-order": "حذف سفارش"
    },
    "factor-manager": {
        "create-factor": "ساخت فاکتور",
        "read-factor": "خواندن فاکتور",
        "update-factor": "بروزرسانی فاکتور",
        "delete-factor": "حذف فاکتور"
    },
    "payment-manager": {
        "create-payment": "ساخت پرداخت",
        "read-payment": "خواندن پرداخت",
        "update-payment": "بروزرسانی پرداخت",
        "delete-payment": "حذف پرداخت"
    },
    "tag-manager": {
        "create-tag": "ساخت تگ",
        "read-tag": "خواندن تگ",
        "update-tag": "بروزرسانی تگ",
        "delete-tag": "حذف تگ"
    },
    "product-manager": {
        "create-product": "ساخت محصول",
        "read-product": "خواندن محصول",
        "update-product": "بروزرسانی محصول",
        "delete-product": "حذف محصول"
    },
    "category-manager": {
        "create-category": "ساخت دسته بندی",
        "read-category": "خواندن دسته بندی",
        "update-category": "بروزرسانی دسته بندی",
        "delete-category": "حذف دسته بندی"
    },
    "coupon-manager": {
        "create-coupon": "ساخت کوپن",
        "read-coupon": "خواندن کوپن",
        "update-coupon": "بروزرسانی کوپن",
        "delete-coupon": "حذف کوپن"
    },
    "specialSell-manager": {
        "create-specialSell": "ساخت فروش ویژه",
        "read-specialSell": "خواندن فروش ویژه",
        "update-specialSell": "بروزرسانی فروش ویژه",
        "delete-specialSell": "حذف فروش ویژه"
    },
    "seller": {
        "create-store": "ساخت فروشگاه",
        "read-store": "ساخت فروشگاه",
        "update-store": "بروزرسانی فروشگاه",
        "delete-store": "حذف فروشگاه",
        "create-customer": "ساخت مشتری",
        "read-customer": "خواندن مشتری",
        "update-customer": "بروزرسانی مشتری",
        "delete-customer": "حذف مشتری",
        "create-product": "ساخت محصول",
        "read-product": "ساخت محصول",
        "update-product": "بروزرسانی محصول",
        "delete-product": "حذف محصول",
        "read-order": "خواندن سفارش",
        "update-order": "بروزرسانی سفارش",
        "create-factor": "ساخت فاکتور",
        "read-factor": "خواندن فاکتور",
        "update-factor": "بروزرسانی فاکتور",
        "delete-factor": "حذف فاکتور",
        "read-payment": "خواندن پرداخت",
        "create-tag": "ساخت تگ",
        "read-tag": "خواندن تگ",
        "update-tag": "بروزرسانی تگ",
        "delete-tag": "حذف تگ",
        "create-category": "ساخت دسته بندی",
        "read-category": "خواندن دسته بندی",
        "update-category": "بروزرسانی دسته بندی",
        "delete-category": "حذف دسته بندی",
        "create-coupon": "ساخت کوپن",
        "read-coupon": "خواندن کوپن",
        "update-coupon": "بروزرسانی کوپن",
        "delete-coupon": "حذف کوپن",
        "create-specialSell": "ساخت فروش ویژه",
        "read-specialSell": "خواندن فروش ویژه",
        "update-specialSell": "بروزرسانی فروش ویژه",
        "delete-specialSell": "حذف فروش ویژه"
    }
}

const roles = {
    "category-manager": "مدیریت دسته بندی ها",
    "coupon-manager": "مدیریت کوپن ها",
    "customer-manager": "مدیریت مشتریان",
    "factor-manager": "مدیریت فاکتور ها",
    "gateway-manager": "مدیریت درگاه ها",
    "order-manager": "مدیریت سفارشات",
    "payment-manager": "مدیریت پرداخت ها",
    "product-manager": "مدیریت محصولات",
    "seller": "فروشنده",
    "specialSell-manager": "مدیریت فروش ویژه",
    "store-manager": "مدیریت فروشگاه",
    "tag-manager": "مدیریت تگ ها",
    "user-manager": "مدیریت کاربران"
}

export default {
    permissions,
    roles
}
