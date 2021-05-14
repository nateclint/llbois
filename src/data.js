const phone = [
    {
        sku: '462',
        label: 'lenovo',
        name: 'LenovoPhone1',
        price: 450.0,
        salePrice: .13,
        productType: 'Phone',
        barcode: '123456789',
        tags: ['Sunglasses', 'Winter', 'Shorts', 'Cool', 'Nice'],
        status: 'Many in stock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        colors: [
		    {
			    color: 'Blue',
			    imgSrc: '/assets/phone/tailored-polo/Blue-full.webp',
		    },
		    {
			color: 'Green',
			imgSrc: '/assets/phone/tailored-polo/Green-full.webp',
		    }
		],  // Từ đây lấy tên file trong thư mục ở trên
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'HEY',
                name: 'er',
                date: '08/29/2020',
                rating: 5.0,
                comment: 'hey hey'
            },
            {
                title: 'MUY BUENA',
                name: 'Paco Gonzalez',
                date: '08/25/2020',
                rating: 5.0,
                comment: 'Un muy buen producto'
            }
        ]
    },
    {
        sku: '445',
        label: 'huawei',
        name: 'HuaweiPhone1',
        price: 380.0,
        salePrice: 0,
        productType: 'phone',
        barcode: '123456789',
        tags: ['Sunglasses', 'Winter', 'Shorts', 'Cool', 'Nice'],
        status: 'Many in stock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Blue',
			    imgSrc: '/assets/phone/premier-jeans/Blue-full.webp',
		    },
		    {
			    color: 'Light Blue',
			    imgSrc: '/assets/phone/premier-jeans/Light Blue-full.webp',
            },
            {
                color: 'Green',
                imgSrc: '/assets/phone/premier-jeans/Green-full.webp',
            },
            {
                color: 'Pink',
                imgSrc: '/assets/phone/premier-jeans/Pink-full.webp',
            },
            {
                color: 'Orange',
                imgSrc: '/assets/phone/premier-jeans/Orange-full.webp',
            },
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'AWESOME',
                name: 'heeeleo',
                date: '09/08/2019',
                rating: 5.0,
                comment: 'great'
            },
            {
                title: 'SASS',
                name: 'sas',
                date: '05/06/2019',
                rating: 4.0,
                comment: 'sscs'
            },
            {
                title: 'JDJ',
                name: 'Tom',
                date: '04/04/2019',
                rating: 5.0,
                comment: 'Hdhd'
            },
            {
                title: 'MNBMNBMN',
                name: 'test',
                date: '03/17/2019',
                rating: 4.0,
                comment: 'mnbmnb'
            },
            {
                title: 'GOOD',
                name: 'Sandip Sarkar',
                date: '03/06/2019',
                rating: 5.0,
                comment: 'Good.'
            }
        ]
    },
    {
        sku: '493',
        label: 'asus',
        name: 'AsusPhone1',
        price: 480.0,
        salePrice: 0,
        productType: 'Phone',
        barcode: '123456789',
        tags: ['Vintage', 'Awesome', 'Summer', 'Beachwear'],
        status: 'Many in stock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        colors: [
		    {
			    color: 'Gray',
			    imgSrc: '/assets/phone/relaxed-shirt/Gray-full.webp',
		    },
            {
                color: 'Green',
                imgSrc: '/assets/phone/relaxed-shirt/Green-full.webp',
            },
           
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'NICE',
                name: 'asc',
                date: '11/02/2020',
                rating: 2.0,
                comment: 'asdfghjoipo'
            },
            {
                title: 'SUPERBA',
                name: 'Marius',
                date: '06/21/2019',
                rating: 5.0,
                comment: 'Superba'
            },
            {
                title: 'JHKSM',
                name: 'KHGQD',
                date: '01/25/2019',
                rating: 5.0,
                comment: 'JHKCQSLSCJK\nSDJK\nCKLSCSC'
            }
        ]
    },
    {
        sku: '481',
        label: 'samsung',
        name: 'SamsungPhone1',
        price: 440.0,
        salePrice: 0,
        productType: 'Phone',
        barcode: '123456789',
        tags: ['Vintage', 'Awesome', 'Summer', 'Beachwear'],
        status: 'You can purchase this product but it\'s out of stock',
        imgScr: './res/phone/viscose-scarf/',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Blue',
			    imgSrc: '/assets/phone/viscose-scarf/Blue-full.webp',
		    },
		    {
			    color: 'Light Blue',
			    imgSrc: '/assets/phone/viscose-scarf/Light Blue-full.webp',
            },
            {
                color: 'Black',
                imgSrc: '/assets/phone/viscose-scarf/Black.webp',
            },
            
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'WERFWEF',
                name: 'drgerg',
                date: '11/25/2019',
                rating: 5.0,
                comment: 'wfewf'
            }
        ]
    },
    {
        sku: '501',
        label: 'Apple',
        name: 'ApplePhone1',
        price: 500.0,
        salePrice: 0,
        productType: 'Phone',
        barcode: '123456789',
        tags: ['Vintage', 'Awesome', 'Summer', 'Beachwear'],
        status: 'Many in stock',
        description: 'No description for this product',
        
        colors: [
		    
		    {
			    color: 'Light Blue',
			    imgSrc: '/assets/phone/product-layout/Light Blue-full.webp',
            },
            
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'NICE',
                name: 'Nice',
                date: '05/29/2020',
                rating: 5.0,
                comment: 'Very nice brother'
            }
        ]
    },
    {
        sku: '34',
        label: 'oppo',
        name: 'OppoPhone1',
        price: 180.0,
        salePrice: 0,
        productType: 'Phone',
        barcode: '123456789',
        tags: ['Vintage', 'Awesome', 'Summer', 'Beachwear', 'Sunglasses'],
        status: 'Many in stock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Black',
			    imgSrc: '/assets/phone/rounded-glasses/Black.webp',
		    } 
		],
        size: [20, 24, 35, 40],
        material: '100% Polyester',
        reviews: []
    },
    {
        sku: '43',
        label: 'apple',
        name: 'ApplePhone2',
        price: 360.0,
        salePrice: 0,
        productType: 'Phone',
        barcode: '123456789',
        tags: ['Sunglasses', 'Winter', 'Shorts', 'Cool', 'Nice'],
        status: 'Many in stock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        colors: [
		    {
			    color: 'Yellow',
			    imgSrc: '/assets/phone/woven-glasses/Yellow.webp',
		    }
		],
        size: [20, 24, 30, 35],
        material: '100% Polyester',
        reviews: [
            {
                title: 'ASAS',
                name: 'kl',
                date: '08/29/2020',
                rating: 5.0,
                comment: 'asasas'
            }
        ]
    }
]
exports.phone = phone
const tablet = [
    {
        sku: '16',
        label: 'samsung',
        name: 'SamsungTablet1',
        price: 320.0,
        salePrice: 0,
        productType: 'Tablet',
        barcode: '123456789',
        tags: ['Vintage', 'Awesome', 'Summer', 'Beachwear'],
        status: 'Many in stock',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'White',
			    imgSrc: '/assets/tablet/slimfit-shirt/White-full.webp',
		    }
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: []
    },
    {
        sku: '2519',
        label: 'apple',
        name: 'AppleTablet1',
        price: 20.0,
        salePrice: 0,
        productType: 'Tablet',
        barcode: '123456789',
        tags: ['Sunglasses', 'Winter', 'Cool', 'Shorts', 'Nice'],
        status: 'Many in stock',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Blue',
			    imgSrc: '/assets/tablet/plaid-shirt/Blue-full.webp',
            },
            {
			    color: 'Light Blue',
			    imgSrc: '/assets/tablet/plaid-shirt/Light Blue-full.webp',
            },
            {
			    color: 'Pink',
			    imgSrc: '/assets/tablet/plaid-shirt/Pink-full.webp',
		    },
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'GOOD SHIRT',
                name: 'hdsbfs',
                date: '11/24/2020',
                rating: 5.0,
                comment: 'bkjegsdg'
            },
            {
                title: 'WOW',
                name: 'asf asf',
                date: '01/10/2019',
                rating: 4.0,
                comment: 'fhiw cakl'
            },
        ]
    },
    {
        sku: '18',
        label: 'Apple',
        name: 'AppleTablet2',
        price: 360.0,
        salePrice: 0,
        productType: 'Tablet',
        barcode: '123456789',
        tags: ['Vintage', 'Awesome', 'Summer', 'Beachwear'],
        status: 'Many in stock',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Brown',
			    imgSrc: '/assets/tablet/vachetta-bag/Brown.webp',
            }
            
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'HELLO',
                name: 'John Smoith',
                date: '11/24/2019',
                rating: 3.0,
                comment: 'bad things'
            },
            {
                title: 'KLAD',
                name: 'oadsfg',
                date: '03/29/2019',
                rating: 2.0,
                comment: 'BAD BAD BAD'
            },
        ]
    },
    {
        sku: '6',
        label: 'Apple',
        name: 'AppleTablet3',
        price: 120.0,
        salePrice: 0,
        productType: 'Tablet',
        barcode: '123456789',
        tags: ['Sunglasses', 'Winter', 'Cool', 'Shorts', 'Nice'],
        status: 'Many in stock',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Brown',
			    imgSrc: '/assets/tablet/douglas-belt/Brown.webp',
            },
            {
			    color: 'Black',
			    imgSrc: '/assets/tablet/douglas-belt/Black.webp',
            },
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'SDGHKB',
                name: 'Akbasf',
                date: '10/24/2019',
                rating: 4.0,
                comment: 'KBJASF'
            }
        ]
    },
    {
        sku: '4',
        label: 'samsung',
        name: 'SamsungTablet2',
        price: 80.0,
        salePrice: 0,
        productType: 'Tablet',
        barcode: '123456789',
        tags: ['Sunglasses', 'Winter', 'Cool', 'Shorts', 'Nice'],
        status: 'Many in stock',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'White',
			    imgSrc: '/assets/tablet/custom-polo/White-front.webp',
            }
		],
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'AAAA',
                name: 'ABag',
                date: '01/24/2019',
                rating: 5.0,
                comment: 'Inag'
            },
            {
                title: 'ABCD',
                name: 'efgh',
                date: '09/12/2020',
                rating: 5.0,
                comment: 'GOOD GOOD GOOD'
            },
            {
                title: 'POLO',
                name: 'Bala',
                date: '12/31/2019',
                rating: 3.0,
                comment: 'Pele'
            },
            {
                title: 'LLOL',
                name: 'Aknaf',
                date: '03/29/2019',
                rating: 4.0,
                comment: 'Etaj lakb uqh i uasjbi'
            },
        ]
    }
]
exports.tablet = tablet
const smartwatch = [
    {
        sku: '244',
        label: 'apple',
        name: 'AppleWatch1',
        price: 480.0,
        salePrice: 0,
        productType: 'smartwatch',
        barcode: '123456789',
        tags: ['Vintage', 'Awesome', 'Summer', 'Beachwear'],
        status: 'Many in stock',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Blue',
			    imgSrc: '/assets/smartwatch/faxon-sneaker/Blue.webp',
            },
            {
			    color: 'Brown',
			    imgSrc: '/assets/smartwatch/faxon-sneaker/Brown.webp',
            },
            {
			    color: 'Gray',
			    imgSrc: '/assets/smartwatch/faxon-sneaker/Gray.webp',
		    },
        ],
        
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'DSFSDFS',
                name: 'fdgdf',
                date: '08/10/2020',
                rating: 5.0,
                comment: 'dfsdfs'
            }
        ]
    },
    {
        sku: '30',
        label: 'samsung',
        name: 'SamsungWatch1',
        price: 100.0,
        salePrice: 0,
        productType: 'smartwatch',
        barcode: '123456789',
        tags: ['Sunglasses', 'Winter', 'Cool', 'Shorts', 'Nice'],
        status: 'Many in stock',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Pink',
			    imgSrc: '/assets/smartwatch/pink-sneaker/Pink.webp',
            }
        ],
        
        size: [20, 24],
        material: '100% Polyester',
        reviews: [
            {
                title: 'VERRY GOOD',
                name: 'Hasf Jnasj',
                date: '08/21/2019',
                rating: 4.0,
                comment: 'Unlsjn'
            },
            {
                title: 'SDG GOOASDGD',
                name: 'Bajs Bajs',
                date: '08/21/2019',
                rating: 5.0,
                comment: 'BNANanhf'
            }
        ]
    },
    {
        sku: '28',
        label: 'apple',
        name: 'AppleWatch2',
        price: 60.0,
        salePrice: 0,
        productType: 'smartwatch',
        barcode: '123456789',
        tags: ['Vintage', 'Awesome', 'Summer', 'Beachwear'],
        status: 'Many in stock',
        
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, nisl at convallis varius, arcu lacus aliquam enim, vitae aliquam magna urna quis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque turpis velit, lacinia vel luctus vitae, sollicitudin ut justo.',
        
        colors: [
		    {
			    color: 'Brown',
			    imgSrc: '/assets/smartwatch/rae-sandal/Brown.webp',
            }
        ],
        
        size: [20, 24],
        material: '100% Polyester',
        reviews: []
    }
]
exports.smartwatch = smartwatch
const users = [
    {
        fullName: 'Nguyễn Gia Hưng',
        username: 'ng_hung',
        dob: '1999-11-24',
        gender: 'Male',
        phone: '0123456789',
        email: 'abc@xyz.com',
        imgSrc: '/assets/profile/default-profile.png',
        billing: [
            {
                name: 'Nguyễn Gia Hưng',
                address: 'HCM City',
                cardNumber: '0123 4567 8901 2345',
                bankName: 'BankJS',
                default: true
            },
            {
                name: 'Nguyễn Gia Hưng',
                address: 'HCM City',
                cardNumber: '1111 2222 3333 4444',
                bankName: 'DeveloBank',
                default: false
            }
        ],
        shoppingHistory: [
            {
                sku: '244',
                date: '10-24-2020',
                billingPrice: 480.0
            }
        ]
    }
]
exports.users = users