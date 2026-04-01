import { MenuItem, Testimonial, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Saffron Shahi Paneer',
    description: 'Velvety gravy infused with Kashmiri saffron and hand-pressed paneer.',
    price: 380,
    category: 'Mains',
    dietary: 'Veg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl3Bd-rublgIuykoEh6KCCvWP_DpGeGEPJYl3ZHA8_uEyedGllXXtL-gZIp5Od45eUb9AKxIAuDVDj_O7SG5CIDCWtXmRnQsGIPpX-1tX8XUwymdynsF0JcAykBkJfYSKVqmNA0LkayX48hmbcva5rQKTsYzY9doFN2ZwgAHgx5aI3lmHIjrdVN7KP7-f35sSaGaOp79jR_KT7rXY6Vmc7x6D-r8SSLuSWh3mnqbfHh2669UQe7Im-aLUILSVmjuG2q7I9eMaQPBs',
    isSpecial: true,
    spicyLevel: 2
  },
  {
    id: '2',
    name: 'Awadhi Gosht Biryani',
    description: 'Dum-cooked long grain basmati with tender lamb and aromatic spices.',
    price: 520,
    category: 'Biryani',
    dietary: 'Non-Veg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ-g65JlLkDC6bJ1jPdNgY98AfNkxYJiqWoVP5kwjXjobxDzpmRrk58DtxDpxZmtSYnvwiF4IKOqlxnBUXLUghwgRbcGvgt6qbKMWgZVDGXUkwYF8IAkMQZWz09KSrFq7jjgSSb8MolKNFGWGGvXaBZoYhULsa4ZK-0JIoiZnjL8eGqNMydwtWyI1aFk3i9ikupdYckqhuwo8pQM-XlYDn6a3xYLfuCoO3zuWzdpU56mKAHgjBt-QRyBwXI3BOQ_aVo_oDtWWy7b0',
    isSpecial: true,
    spicyLevel: 1
  },
  {
    id: '3',
    name: 'Heritage Thali',
    description: 'A complete symphony of five seasonal curries, fresh naan, and mithai.',
    price: 650,
    category: 'Mains',
    dietary: 'Veg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRXQ0MtMthIm1IP3pSFxq-18Q5Ljs2FrUvl-zjmvcpWOcInapFy8Ey7A36Ll74Sv7LK9EusNPUnmHibkgRuHG1lQecb5puJVNeVGhIDoNgU03DuuQLCYteif4VgwivtGvK0AmC1DlnMkVh2V13v1OZW8_HcHFtu3dnJYNkCZVdZTT5KBTQDRnDutoiXQ86Ad_70qrng3pXRrtMQMfTxuS8y04gBchYMqOYMSvs4JlQXeFZ5klphujb_FTIgmFg4FOdktGuzA4WDyg',
    isSpecial: true,
    spicyLevel: 1
  },
  {
    id: '4',
    name: 'Motichoor Ladoo',
    description: 'Soft pearl-sized gram flour balls fried in pure ghee.',
    price: 45,
    category: 'Sweets',
    dietary: 'Veg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYrQGcdguOefisMMKLG1NPiUBLpAAuFq7KOSVNa4QsGUWVq4x3picQsRRWsAgb6DTGXEZ9KDAi_FPSOqUPNO6BJSTz4qybjbaxvfEOwoEQ2lfnpPwShXz4KPwWZmXC0MkqCqvb97uh__Ym_yrwzI19uKfSfqAW80sPoN_g8JiAat8JcPybsyKhgXV8Ym-QGJguQ8202ZdktFltxR6fuqxH6nbsibSIItE4o6ldihFZFXhlb7HjsXtY3IBWeNopkAtFsRpXhq8FUmQ',
    isBestseller: true
  },
  {
    id: '5',
    name: 'Kaju Katli',
    description: 'The classic cashew fudge with edible silver leaf.',
    price: 55,
    category: 'Sweets',
    dietary: 'Veg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkQ-yIK4jL4TWNU5Pe8PJnfuvzhwW9chxRkWcDkQSaqq-2lM9tyW3OxynQq8M-DQi9pQO2bPjguLmKdFpaWTpNY3Xi7R1Z8AXQXUPW9RDWUJU4HfjMX7jOkCTRrokcj1fzgv7EPg_NhEjDh0Nqk8_qGt-oNt3Ll2SYwwqje7DZDK-W03MAESzyfeLCGuKY5wdXRjy0vWg8HRG138VgTJ4J-ufMom2tnR8BExeRQT03F0-5qh2aWbhs3SzFPioC4-S_KJkPd2kboV0',
    isBestseller: true
  },
  {
    id: '6',
    name: 'Gulab Jamun',
    description: 'Deep-fried milk solids in rose flavored syrup.',
    price: 40,
    category: 'Sweets',
    dietary: 'Veg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuIYXIcze6yC67PF7wN8tgjHKW1Fy6DLjfzGJmkaAWalVfwyiQlrTEdTCqIiLKg6aLDqcVd7BX0FdLnst_MnRuQIMAdrSgOwGTFVM9A2ebYkHffkuXq9gHaxTaUqv1wQaG-ZultBmh8gxWXLWcNyfYZMmSL5aWPLrhx-sV6jvy7SrZIgZwO2I53x2CQsnoLm2sX4k4ZiGLZxHJ3dPE9Ts_4_SLUZAkhTCTmE3mCi7l9IQJoe0bYjOsRUhCggmZs3wExem4kTuhiN0'
  },
  {
    id: '7',
    name: 'Paneer Lababdar',
    description: 'Soft paneer cubes simmered in a rich, tangy tomato and cream gravy.',
    price: 420,
    category: 'Mains',
    dietary: 'Veg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHkyNmY5MDjirWeaCLyXJ6Eyc1XujAvnVW0EKTwm7T3RHc9RP_5PzUtvmceNc8fG60KTmDT_ECffhUkAyysnpSN4UVAUPykBUXfTO_eWf3t22L-j8iI8WFBKvSeGT6LBQWk4BYmcOrzh7oNrdP9xmn-qS5wWGisDihnL4t1VPEzETOrEDs_xw2vNiDjNan_PisPlQDqzcYaY1ug-ofc1KjyOi6bDWdnzR9tx8VbtTlCeeht0eB2QqjE6f4nLSvWOeGjqYkCTL_Tt0',
    spicyLevel: 2
  },
  {
    id: '8',
    name: 'Garlic Butter Naan',
    description: 'Leavened flour bread baked in tandoor, brushed with garlic butter.',
    price: 80,
    category: 'Savouries',
    dietary: 'Veg',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVfECFO_kLzxKlMHOQqjnwoM9UDHfW10NsgVByRLfFmA144WiYG1wvTDhXH6zdCmMKuqofzAkMAUAcX_jecsh3c00uosa3AtUbUmSRbyuunGj6ZVpKUPjORkeNR8OguWa_G9X1gZ8N8IxOgkjYBd0XzfRu2_xBhS6Imb5KlhCA6G9jMSdSc4tR4aYl6u8i4htMwBtr-p7SLOqGXqF896u02XQ5NEp0YSjioauymwPC3HI1_NKqWbBVwv-CQ9DdFuxF7Zk6xOXjUbE'
  },
  {
    id: '9',
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils and kidney beans enriched with butter and fresh cream.',
    price: 320,
    category: 'Mains',
    dietary: 'Veg',
    image: 'https://picsum.photos/seed/dalmakhani/800/600',
    isSpecial: true,
    spicyLevel: 1
  },
  {
    id: '10',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry served with fluffy, deep-fried leavened bread.',
    price: 250,
    category: 'Mains',
    dietary: 'Veg',
    image: 'https://picsum.photos/seed/chole/800/600',
    isSpecial: true,
    spicyLevel: 2
  },
  {
    id: '11',
    name: 'Malai Kofta',
    description: 'Melt-in-mouth potato and paneer dumplings in a rich, creamy cashew gravy.',
    price: 390,
    category: 'Mains',
    dietary: 'Veg',
    image: 'https://picsum.photos/seed/kofta/800/600',
    isSpecial: true,
    spicyLevel: 1
  },
  {
    id: '12',
    name: 'Palak Paneer',
    description: 'Fresh cottage cheese cubes simmered in a vibrant, spiced spinach puree.',
    price: 350,
    category: 'Mains',
    dietary: 'Veg',
    image: 'https://picsum.photos/seed/palak/800/600',
    isSpecial: true,
    spicyLevel: 2
  },
  {
    id: '13',
    name: 'Murgh Makhani',
    description: 'Classic Butter Chicken featuring tandoor-roasted chicken in a velvety tomato gravy.',
    price: 480,
    category: 'Mains',
    dietary: 'Non-Veg',
    image: 'https://picsum.photos/seed/butterchicken/800/600',
    isSpecial: true,
    spicyLevel: 2
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Khanna',
    role: 'Food Critic & Regular',
    content: 'The Motichoor Laddu here is what memories are made of. It hasn\'t changed its taste in 20 years. Simply unparalleled purity.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAasLxiHBKRgtq5npUwnfDymEQNHkLrQcWfn9fPjaXsn7YyiB6T0vjfDDREH2HBWksiTgk1NgDzwWwwq2SrWBzrasodlqsQ_6kpxLJb3Sf_UeJk6JUl508FTs0lWqPA7LsMYCCJzXr9Utw6RrL3jQA07XVSFyYzbe7ZYpvtCjxyR5uX_JFgbFNVAjR_OfBYDHNobGELA476JzHpQvSA11FhbeEAvg4is-IMKunYd-4qgzkBuhb5ANw3Vq2W_nmuQJ0m5CvWY0oONAA'
  },
  {
    id: '2',
    name: 'Arjun Mehra',
    role: 'Gastronomy Enthusiast',
    content: 'Their Butter Chicken is velvet on a plate. The smoky aroma and the quality of chicken speak volumes about their commitment.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEkVZyDu7PaeZKegy4128kH9lWrDhuIFiAu7R5QnPdCdkzNAEYhFzA-stLnbWLS7tDBPodnHeXqWCkvZNiLaed3cclmfmYw-7_cVYA0JJyUt833RbNCOEbgfYzGaVRr-v_7rhrz6_p6yMVsb39IS9kt1wr39iD0QSnTF7RF25pSx2Un8Bqm0pZlq0IGnim4Zw843WzGNITCUCjrJ3gGRjQhz7BpfqFiqsn1xYVf6ZiGY5ZYQpd3YG7dWyjgKxBPg-MBlNt2xa8JZg'
  },
  {
    id: '3',
    name: 'Suhani Gupta',
    role: 'Corporate Banker',
    content: 'The hospitality at Swad Ka Ghar is as warm as their food. It truly feels like coming home to family every single time.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Elcx0FJXRUR2bbsu2oKmhv5MP7eMIyQ9pTMRPFqV3jrQr1VdkSW55IoMLiCVki0oxu--GnAdxeT1Z1dpsCGLF0aYrS5eXtQKOEBRm6-xvYawQxXwnvQ16QClROZlsqQtLV3rUj-eb6RKpWXcSSjfeqkTtMzYt55VPHPC6mdscxFYWaAOxdWTYWXZ4YrFUHHMJpR0Ha6UPG_6h7Re8VkXcOmGePy6ndMQSDuhkRtJFjjOqXjGXcP8LkPDdLTHGPFcrL06SUrdjbs'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmU7xz6vARByzDuLKIsiDI9Z1uTgvIoyVwX_Kh3aQnG7nd2PMANeyQd4OdeIAyDGN2MsGsH2jCmOqq0kZC1mHSY54yNq8EJtFX07ZJEM6W-sAwT03CZB44lDFlUy0rIwPOuN0JQZcbLEKFnK8_KRdW2Cq-K1G9YUFn3X455-od5sWXovM0CM0RHUhhagDGshn51blaDpyGju6-eINdVGeANECmcikqALGXm9xrHa4496YBWlb25a5HMiF8_OetmegS9oYjeuwQRXY', title: 'Signature Gulab Jamun', category: 'Sweets', dietary: 'Veg' },
  { id: '2', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh1GXjuaZSlv8XSwpDwiIHbkG_pVahG2WPveeDJNRdeLrev_i9XQQaT7sk5v8YMOvG2kAwPungCcLNc9DFLbucs7rFIg6zjGCjV67cU8TpWhntYcgUlxWFSgbAJgsMpT5SxuPN82bhPwntQQkc8FpE37oiX_3hhrW3cudOywPVQfzPun4DDzt-ql7SAa-LOoccsjD8BMeE7d-puC41iIGT78AT1mKUOflDUBxYP3yBL3qwF3DeLqt-M3udHVn6mjGMiBvxG124l_0', title: 'Maharaja Thali', category: 'Mains', dietary: 'Veg' },
  { id: '3', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIO9OJObJpzR6wpKyXPCN2wr5TcDRVxRHJ-j0JKIpz0Prs74fBlqaLqfJcKrnVFzh6kPo8avWhKWhzGTqflqaB78nOxgpDr2KpYSpxrPJQkn--ehCAldT6iCfcv7D-J0QlDzAo9Rc5tJ_R7rfj2ZkmGhFQhm7sdnOstaD2CA-f0uNlcAvja5B8-LovjtWPwT4zvpQvF-9YOf5MoB2JVMu1uGMDlOF4x5g4eIt-7ABpi8sBtoZS-y_vDFp5XkXkRCE4c_gkDHXEMZQ', title: 'Paneer Tikka', category: 'Mains', dietary: 'Veg' },
  { id: '4', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCagMBE0yqiTP-nx5Vts320dMSIPwJ0k-AX48N5Tsov2TONqFmQcd84QX5EO2KU5L8sMt_hAPKLQcJVBwpCoS3mOIA3FdqoUwYCDdSQhqhBS8DXqJj51xLhBu_-u1qHFeIOl93KoCOINN_S5a1qh0Ii-yscKwTiKXDG7XrShZNGm_KceVLs2AB9Z7-OBcKRlGwGzmNDcgrvdXRz3LZPtG8yKOUCIX2XA8BPWnmYvXDezXc9f2BlxBT0e2h3TIVrvk28NXqhxDv8kdc', title: 'Saffron Jalebi', category: 'Sweets', dietary: 'Veg' },
  { id: '5', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM6wOuJAuw2xe2goPtC217PZTe9XBXjHDz3Ecb6oacLF-LHM7uOvVwj3XnAECt_EhvEFtEBhL816U6XPPJtN7RwMM2O3n6jw8wU5fYrSTk0S3U5Qtomo5o1098jZwqXF2a3u3YGsOLfJnju7lBGTy_IXoykwNV70s4jKuywHpHEHYbXXdzd-1GWudL15a9j1kZHbUgHvMmAWa0zesRZv3qmLCwAfoiiOI8dEtpxzww5rriDmGjw9mr4V_7_2JWgpEbWY9u3RhwoVs', title: 'Awadhi Handi Biryani', category: 'Biryani', dietary: 'Non-Veg' },
  { id: '6', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXMYaVKFHbroOFwRlidTx5gWmTeljhGFOYgoCfkChs1tb243i2KbZ-1Tyt-ONUNNXX_RWpYK2y3DeK3-H5-acs2OaywgcMbl3VjlWyepklQEbBhQZnBdVlU-51WELGARWixMQDnAUDn_nLK5naShRBqlKAUcpltgv9za7aReljUYJK54nR0Kr9XFn_ACo9YBXzzsvvAplbKaGtOOboNS1i67x_zbhrxQ_jgnN7SN6ZIoYwMCOiANDjIVvxsYYn4QpdnckY8Cg_qAs', title: 'Samosa Chaat', category: 'Savouries', dietary: 'Veg' }
];
