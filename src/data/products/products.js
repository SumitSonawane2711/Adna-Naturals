import { FaLeaf, FaFlask, FaSeedling } from "react-icons/fa";

const products = [
  {
    id: "001",
    slug:'adna-naturals-milky-soft-baby-lotion-with-shea-butter-001',
    image: [
      "https://adnanaturals.com/assets/products/lotion/103.jpg",
      "https://adnanaturals.com/assets/products/lotion/104.jpg",
      "https://adnanaturals.com/assets/products/lotion/105.JPG",
    ],
    name: "ADNA Naturals Milky Soft Baby Lotion with  Shea Butter, Calendula",
    price: 299.00,
    mrp: 699.00,
    category: "Skin Care",
    description:
      "A gentle lotion formulated to moisturize and protect your baby's delicate skin.",
    aboutThisItem:
      "ADNA Naturals Milky Soft Baby Lotion  Enriched with Almond Oil, Shea Butter, Calendula, Aloe Vera, Vitamin E, Formulated to Gently Moisturize & Protect Your Baby's Delicate Skin.",
    benefits: [
      "ADNA Naturals Milky Soft Baby Lotion Enriched with Almond Oil, Shea Butter, Calendula, Aloe Vera, Vitamin E , Formulated to Gently Moisturize & Protect Your Baby Delicate Skin.",
      "Clinically Tested – Zero Tolerance to Toxins",
      "Protects against- Dryness, Irritation, Roughness, Tightness, Weakened Skin ",
      "No Mineral Oil - No Silicones -  No Parabens",
      "Dermatologically Approved & Pediatrician Tested",
    ],
    detailedDescription: {
      points: [
        "Long-Lasting Hydration: Infused with natural moisturizers, this lotion locks in moisture for up to 24 hours, keeping your baby's skin soft and smooth.",
        "Gentle and Safe: Formulated without harsh chemicals, it's perfect for sensitive newborn skin, ensuring comfort with every use.",
        "Lightweight Feel: The non-greasy, fast-absorbing formula glides on effortlessly, leaving no sticky residue behind.",
        "Soothes Dryness: Ideal for tackling dry patches or irritation, it restores the skin's natural balance with a calming touch.",
        "Daily Nourishment: Crafted for everyday use, it supports healthy skin development, making it a must-have in your baby's skincare routine.",
      ],
    },
    ingredients: [
      {
        name: "Aloe Vera",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Calendula",
        description:
          "Antifungal, anti-inflammatory, and antibacterial soothing properties",
        icon: FaFlask,
      },
      {
        name: "Almond Oil",
        description:
          "Prevents inflammation, moisturizes baby's skin & keeps it milky soft.",
        icon: FaSeedling,
      },
      {
        name: "Shea Butter",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Vitamin E",
        description: "Creates a protective shield for overall skin-wellness.",
        icon: FaFlask,
      },
    ],
    routines: {
      description: "",
      howToUse: [
        "Start with clean, dry skin—perfect after a bath or whenever your baby's skin needs a boost.",
        "Squeeze a small amount of Baby Lotion into your palm (a pea-sized amount is usually enough for small areas).",
        "Gently massage the lotion onto your baby's skin using soft, circular motions.",
        "Focus on dry areas like elbows, knees, or cheeks, but feel free to apply all over for full-body care.",
        "Use daily as needed to maintain soft, healthy skin.",
      ],
      instructions: [
        "Apply liberally after bath time to lock in moisture while the skin is still slightly damp.",
        "For best results, pair with a mild baby wash to cleanse without stripping natural oils.",
        "Avoid applying near the eyes or mouth; if contact occurs, rinse with water immediately.",
      ],
      requiredInfo: {
        storage: "Keep in a cool, dry place away from direct sunlight.",
        caution:
          "For external use only. Discontinue use if irritation occurs and consult a pediatrician.",
        suitability:
          "Safe for newborns and babies with sensitive skin; always patch-test on a small area first if unsure.",
        size: "Available in 8 oz (240 mL) bottles, perfect for home or travel.",
      },
    },
    buyingOptions : {
    amazoneUrl:"https://www.amazon.in/Nourishing-Moisturization-Dermatologist-Pediatrician-Clinically/dp/B0F7QMGDMK/ref=sr_1_5?sr=8-5",
    flipKartUrl: "https://www.flipkart.com/adna-naturals-milky-soft-baby-lotion-nourishing-moisturization-clinically-tested/p/itm19e1bc26f3b10?pid=BEOHDGZYEGTURXXS&lid=LSTBEOHDGZYEGTURXXSILWPKQ&marketplace=FLIPKART&hl_lid=&q=adna+oil&store=kyh%2Fpl5%2Fv7f&pageUID=1752073005321", 
    jiomartUrl:"https://www.jiomart.com/p/groceries/adna-naturals-milky-soft-baby-lotion-by-dr-aarti-and-dr-namrata-with-shea-butter-calendula-deep-moisturizing-hypoallergenic-gentle-skincare-for-newborns-infants/611325673",
    }
  },
  {
    id: "002",
    slug:'adna-naturals-deep-nourishing-baby-shampoo-with-aloe-vera-chamomilla-vit-e-002',
    image: [
      "https://adnanaturals.com/assets/products/shampoo/100.jpg",
      "https://adnanaturals.com/assets/products/shampoo/100.jpg",
    ],
    name: "ADNA Naturals Deep Nourishing Baby Shampoo with Aloe Vera, Chamomilla, Vit-E",
    price: 271.00,
    mrp:399.00,
    category: "Bath",
    description:
      "A mild shampoo specially formulated for your baby's sensitive scalp and hair.",
    aboutThisItem:
      "Our baby shampoo is tear-free and hypoallergenic, ensuring a gentle and enjoyable bathing experience for your little one.",
    benefits: [
      "ADNA Naturals Deep Nourishing Baby Shampoo Enriched with Aloe Vera, Chamomilla, Hibiscus, Olive Oil, Vitamin E",
      "No Tears-All Smiles: Ensuring a comfortable and safe bath fun time experience for babies",
      "Potentially Protects Baby Hair & Scalp with its Powerful Antioxidant, Anti-Microbial, & Anti-Inflammatory Elements",
      "Clinically Tested – Zero Tolerance to Toxins",
      "No Mineral Oil - No Silicones - No Parabens",
      "Sulfate Free (SLS / SLES)",
      "Dermatologist Approved & Pediatrician Tested",
    ],
    ingredients: [
      {
        name: " Aloe Vera",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Chamomilla",
        description:
          "Antifungal, anti-inflammatory, and antibacterial soothing properties",
        icon: FaFlask,
      },
      {
        name: " Hibiscus",
        description:
          "Prevents inflammation, moisturizes baby's skin & keeps it milky soft.",
        icon: FaSeedling,
      },
      {
        name: "Olive Oil",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Vitamin E",
        description: "Creates a protective shield for overall skin-wellness.",
        icon: FaFlask,
      },
    ],
    routines: {
      description: "",
      howToUse: [
        "Wet the baby hair with warm water",
        "Apply ADNA Naturals Deep Nourishing Baby Shampoo as per need into your hand and gently massage it into your cute baby scalp & wet hair",
        "Foam, rinse & cleanse the baby hair thoroughly",
        "Gently pat your baby hair/body with a soft towel",
      ],
      instructions: [
        "Apply liberally after bath time to lock in moisture while the skin is still slightly damp.",
        "For best results, pair with a mild baby wash to cleanse without stripping natural oils.",
        "Avoid applying near the eyes or mouth; if contact occurs, rinse with water immediately.",
      ],
      requiredInfo: {
        storage: "Keep in a cool, dry place away from direct sunlight.",
        caution:
          "For external use only. Discontinue use if irritation occurs and consult a pediatrician.",
        suitability:
          "Safe for newborns and babies with sensitive skin; always patch-test on a small area first if unsure.",
        size: "Available in 8 oz (240 mL) bottles, perfect for home or travel.",
      },
    },
     buyingOptions : {
    amazoneUrl:"https://www.amazon.in/Nourishing-Blesssings-Chamomilla-Pediatrician-Dermatolgist/dp/B0F7RS3TXJ/ref=sr_1_5?sr=8-5",
    flipKartUrl: "https://www.flipkart.com/adna-naturals-baby-shampoo-aloe-vera-chamomilla-hibiscus-olive-oil-vitamin-e/p/itmf1e91b88f65cc?pid=SMPHCD2YFKBXTJHZ&marketplace=FLIPKART&cmpid=product.share.pp&_refId=PP.9791b77e-5d83-42ad-b447-bc063cecb071.SMPHCD2YFKBXTJHZ&_appId=CL", 
    jiomartUrl:"https://www.jiomart.com/p/groceries/adna-naturals-milky-soft-baby-lotion-by-dr-aarti-and-dr-namrata-with-shea-butter-calendula-deep-moisturizing-hypoallergenic-gentle-skincare-for-newborns-infants/611325673",
    }
  },
  {
    id: "003",
    slug:'adna-naturals-herbal-baby-massage-oil-with-eladi-thailam-olive-oilNalpamaradhi-003',
    image: [
      "https://adnanaturals.com/assets/products/oil/101.jpg",
      "https://adnanaturals.com/assets/products/oil/102.JPG",
    ],
    name: "ADNA Naturals Herbal Baby Massage Oil with Eladi Thailam, Olive OilNalpamaradhi ",
    price: 399.00,
    mrp:839.00,
    category: "Massage",
    description:
      "A nourishing baby body massage oil to help keep your baby's skin soft and hydrated.",
    aboutThisItem:
      "Our baby oil is enriched with natural oils like almond and jojoba, providing deep hydration without greasiness.",
    benefits: [
      "ADNA Naturals Herbal Baby Massage Oil Enriched with Eladi Thailam / Olive Oil / Coconut Oil / Balaaswagandhadi / Nalpamaradhi",
      "The Natural Powerful Antioxidant Properties Work as an Excellent Natural Moisturizer, & it Helps Keep Your Baby Skin Soft & Hydrated",
      "Happily, Watch Your Baby Grow with Stronger Bones & Healthier Muscles",
      "Deeply Moisturizes Baby's Skin & Prevents Dryness, Improve Complexion from Phototherapy Skin Darkening.",
      "Clinically Tested – Zero Tolerance to Toxins",
      "No Mineral Oil - No Silicones - No Parabens - No Harmful Preservatives",
      "Dermatologist Approved & Pediatrician Tested",
    ],
    ingredients: [
      {
        name: "Eladi Thailam",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Olive Oil",
        description:
          "Antifungal, anti-inflammatory, and antibacterial soothing properties",
        icon: FaFlask,
      },
      {
        name: "Coconut Oil",
        description:
          "Prevents inflammation, moisturizes baby's skin & keeps it milky soft.",
        icon: FaSeedling,
      },
      {
        name: "Balaaswagandhadi",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Nalpamaradhi",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
    ],
    routines: {
      description:
        "The Traditional Abhyanga Approach in Accordance with Ancestral Principles",
      howToUse: [
        "Place your baby on a soft cloth or towel",
        "Rub the desired amount of oil between your palms to warm it slightly",
        "Gently massage your cute baby with 'ADNA Naturals Herbal Baby Massage Oil' use gentle, light strokes",
        "Leave the massage oil on after the massage as per need of baby skin",
        "What soaks in the skin through ADNA Naturals baby products is what the baby will thank the mother now and for life",
      ],
      instructions: [
        "Apply liberally after bath time to lock in moisture while the skin is still slightly damp.",
        "For best results, pair with a mild baby wash to cleanse without stripping natural oils.",
        "Avoid applying near the eyes or mouth; if contact occurs, rinse with water immediately.",
      ],
      requiredInfo: {
        storage: "Keep in a cool, dry place away from direct sunlight.",
        caution:
          "For external use only. Discontinue use if irritation occurs and consult a pediatrician.",
        suitability:
          "Safe for newborns and babies with sensitive skin; always patch-test on a small area first if unsure.",
        size: "Available in 8 oz (240 mL) bottles, perfect for home or travel.",
      },
    },
    buyingOptions : {
    amazoneUrl:"https://www.amazon.in/Naturals-Nalpamaradhi-Dermatologist-Pediatrician-Clinically/dp/B0F7QXTLYH/ref=sr_1_5?sr=8-5",
    flipKartUrl: "https://www.flipkart.com/adna-naturals-herbal-baby-massage-oil-eladi-thailam-olive-oil-nalpamaradhi/p/itm641eeba5de51e?pid=MSOHD3SCEYPJKEZ6&lid=LSTMSOHD3SCEYPJKEZ6L9S4YL&marketplace=FLIPKART&q=adna+oil&store=kyh%2Fpl5%2Fv7f&srno=s_1_2&otracker=AS_QueryStore_OrganicAutoSuggest_%7BPOSITION%7D_5_na_na_na&fm=search-autosuggest&iid=bbebc3a3-7eab-4517-a1d7-d0ae6d1f6986.MSOHD3SCEYPJKEZ6.SEARCH&ppt=sp&ppn=sp&ssid=ziysptiw8w0000001752145689987&qH=d7f9ea2c8dd9c876", 
    jiomartUrl:"https://www.jiomart.com/p/groceries/adna-naturals-milky-soft-baby-lotion-by-dr-aarti-and-dr-namrata-with-shea-butter-calendula-deep-moisturizing-hypoallergenic-gentle-skincare-for-newborns-infants/611325673",
    }
  },
  {
    id: "004",
    slug:'adna-naturals-moisturizing-baby-body-wash-with-shea-butter-almonds-sandalwood-milk-protein-004',
    image: [
      "https://adnanaturals.com/assets/products/moisturizer/111.jpg",
      "https://adnanaturals.com/assets/products/moisturizer/112.jpg",
    ],
    name: "ADNA Naturals Moisturizing Baby Body Wash with Shea Butter, Almonds, Sandalwood, Milk, Protein",
    price: 279.00,
    mrp:399.00,
    category: "Bath",
    description: "A gentle body wash to cleanse and refresh your baby's skin.",
    aboutThisItem:
      "Our baby body wash is soap-free and pH-balanced, keeping your baby's skin healthy and moisturized.",
    benefits: [
      "ADNA Naturals Moisturizing Baby Body Wash Enriched with Shea Butter, Almonds Sandalwood, Milk Protein, Vitamin E",
      "No Tears- All Smiles",
      "Intense Nourishment with Every Use",
      "Gentle Moisturizing Care",
      "Clinically Tested – Zero Tolerance to Toxins",
      "Dermatologist Approved & Pediatrician Tested",
    ],
    ingredients: [
      {
        name: "Shea Butter,",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Almonds Sandalwood",
        description:
          "Antifungal, anti-inflammatory, and antibacterial soothing properties",
        icon: FaFlask,
      },
      {
        name: "Milk Protein",
        description:
          "Prevents inflammation, moisturizes baby's skin & keeps it milky soft.",
        icon: FaSeedling,
      },
      {
        name: "Vitamin E",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
    ],
    routines: {
      howToUse: [
        "Wet your cute baby's body/skin with warm water",
        "Pump ADNA Naturals Moisturizing Baby Body Wash on your palm & lightly apply into your baby body",
        "Rinse & cleanse thoroughly and pat dry.",
        "Happy Mom + Healthy Baby + ADNA Naturals = Bonding Time",
      ],
      instructions: [
        "Apply liberally after bath time to lock in moisture while the skin is still slightly damp.",
        "For best results, pair with a mild baby wash to cleanse without stripping natural oils.",
        "Avoid applying near the eyes or mouth; if contact occurs, rinse with water immediately.",
      ],
      requiredInfo: {
        storage: "Keep in a cool, dry place away from direct sunlight.",
        caution:
          "For external use only. Discontinue use if irritation occurs and consult a pediatrician.",
        suitability:
          "Safe for newborns and babies with sensitive skin; always patch-test on a small area first if unsure.",
        size: "Available in 8 oz (240 mL) bottles, perfect for home or travel.",
      },
    },
    buyingOptions : {
    amazoneUrl:"https://www.amazon.in/Moisturizing-Sandalwood-Dermatologist-Pediatrician-Tolerance/dp/B0F6NQ3XY3/ref=sr_1_5?sr=8-5",
    flipKartUrl: "https://www.flipkart.com/adna-naturals-moisturizing-baby-body-wash-safe-daily-bath-skincare-cleanser/p/itme1d56507438d5?pid=BWSHD3HYAFBXTGWQ&lid=LSTBWSHD3HYAFBXTGWQEHPFYZ&marketplace=FLIPKART&pageUID=1757402235317", 
    jiomartUrl:"https://www.jiomart.com/p/groceries/adna-naturals-milky-soft-baby-lotion-by-dr-aarti-and-dr-namrata-with-shea-butter-calendula-deep-moisturizing-hypoallergenic-gentle-skincare-for-newborns-infants/611325673",
    }
  },
  {
    id: "005",
    slug:'adna-naturals-nourishing-baby-head-to-toe-wash-005',
    image: [
      "https://adnanaturals.com/assets/products/nourishing/106.jpg",
      "https://adnanaturals.com/assets/products/nourishing/110.jpg",
      "https://adnanaturals.com/assets/products/nourishing/112.jpg",
    ],
    name: "ADNA Naturals Nourishing Baby Head-to-Toe Wash with Avocado, Oats, Shea Butter, Almond Oil",
    price: 249.00,
    mrp:339.00,
    category: "Bath",
    description: "A convenient all-in-one wash for your baby's hair and body.",
    aboutThisItem:
      "Our baby head to toe wash is mild and gentle, making bath time a breeze. Its tear-free formula ensures a happy bath for your little one.",
    benefits: [
      "ADNA Natural Nourishing Baby Head-to-Toe Wash Enriched with Avocado, Oats, Shea Butter, Almond Oil, Milk Protein, Vitamin E",
      "No Tears- All Smiles",
      "Intense Nourishment with Every Use",
      "Gentle Moisturizing Care",
      "Clinically Tested – Zero Tolerance to Toxins",
      "No Mineral Oil - No Silicones - No Parabens - No Sulphates",
      "Dermatologist Approved & Pediatrician Tested",
    ],
    ingredients: [
      {
        name: "Avocado",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Oat kernel extract",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Shea Butter,",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Almonds Oil",
        description:
          "Antifungal, anti-inflammatory, and antibacterial soothing properties",
        icon: FaFlask,
      },
      {
        name: "Milk Protein",
        description:
          "Prevents inflammation, moisturizes baby's skin & keeps it milky soft.",
        icon: FaSeedling,
      },
      {
        name: "Vitamin E",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
    ],
    routines: {
      description: "",
      howToUse: [
        "Wet baby's body & hair with warm water",
        "Pump the desired amount of ADNA Nourishing Baby Head-to-Toe Wash into your palm",
        "Gently massage it onto the baby skin and hair, then rinse thoroughly and pat dry.",
        "Happy Mom + Healthy Baby + ADNA Naturals = Bonding Time",
      ],
      instructions: [
        "Apply liberally after bath time to lock in moisture while the skin is still slightly damp.",
        "For best results, pair with a mild baby wash to cleanse without stripping natural oils.",
        "Avoid applying near the eyes or mouth; if contact occurs, rinse with water immediately.",
      ],
      requiredInfo: {
        storage: "Keep in a cool, dry place away from direct sunlight.",
        caution:
          "For external use only. Discontinue use if irritation occurs and consult a pediatrician.",
        suitability:
          "Safe for newborns and babies with sensitive skin; always patch-test on a small area first if unsure.",
        size: "Available in 8 oz (240 mL) bottles, perfect for home or travel.",
      },
    },
    buyingOptions : {
    amazoneUrl:"https://www.amazon.in/ADNA-Naturals-Nourishing-Head-Tears/dp/B0F7R1GTV3/ref=sr_1_6?sr=8-6",
    flipKartUrl: "https://www.flipkart.com/adna-naturals-nourishing-baby-head-to-toe-wash-dermatologist-clinically-approved/p/itmd21abdecd0c3f?pid=BWSHD3NXZPXHEKGD&lid=LSTBWSHD3NXZPXHEKGDLTFOYX&marketplace=FLIPKART&hl_lid=&q=adna+naturals+nourishing+baby+head-to-toe+wash&store=kyh%2Fpl5%2Fpee&pageUID=1752073158032", 
    jiomartUrl:"https://www.jiomart.com/p/groceries/adna-naturals-milky-soft-baby-lotion-by-dr-aarti-and-dr-namrata-with-shea-butter-calendula-deep-moisturizing-hypoallergenic-gentle-skincare-for-newborns-infants/611325673",
    }
  },
  {
    id: "006",
    slug: 'adna-naturals-baby-diaper-rash-cream-with-zinc-oxide-manjistha-shea-butter-006',
    image: [
      "https://adnanaturals.com/assets/products/cream/115.jpg",
      "https://adnanaturals.com/assets/products/cream/116.jpg",
      "https://adnanaturals.com/assets/products/cream/117.jpg",
      "https://adnanaturals.com/assets/products/cream/201.jpg",
    ],
    name: "ADNA Naturals Baby Diaper Rash Cream with Zinc Oxide, Manjistha & Shea Butter",
    price: 299.00,
    mrp: 411.00,
    category: "Skin Care",
    description: "A soothing cream to help relieve and prevent diaper rash.",
    aboutThisItem:
      "Our baby rash cream is enriched with zinc oxide and calendula extract, providing gentle yet effective protection against diaper rash.",
    benefits: [
      "ADNA Naturals Baby Diaper Rash Cream Enriched with Zinc Oxide, Manjistha, Shea Butter & Vitamin E",
      "Prevents & Treats Diaper Irritation While Nourishing the Skin",
      "Creates Breathable Protective Barrier Against Skin Infection",
      "Intense Nourishment with Every Application",
      "The Antifungal & Anti-Inflammatory, Properties Help Fight Off Yeast. Which Helps Reduce Further Irritation from Diaper Rash as Well As Possibly Preventing it in the First Place",
      "Possess Potent Anti-Inflammatory Properties That Help Soothe Irritated Skin, Reduces Redness",
      "Clinically Tested – Zero Tolerance to Toxins",
      "Dermatologically Approved & Pediatrician Tested",
    ],
    ingredients: [
      {
        name: "Shea Butter,",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Zinc Oxide,",
        description:
          "Antifungal, anti-inflammatory, and antibacterial soothing properties",
        icon: FaFlask,
      },
      {
        name: "Manjistha",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Hydrolysed Milk Protein",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },

      {
        name: "Vitamin E",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
    ],
    routines: {
      description: "",
      howToUse: [
        "Ensure the baby skin area is clean and dry, then apply a thick, even layer of ADNA Naturals Baby Diaper Rash Cream, like frosting, to the affected area",
        "Preferably apply at each diaper change and before bedtime",
        "Can also be used against Insect Bites & Sunburns for instant relief",
      ],
      instructions: [
        "Apply liberally after bath time to lock in moisture while the skin is still slightly damp.",
        "For best results, pair with a mild baby wash to cleanse without stripping natural oils.",
        "Avoid applying near the eyes or mouth; if contact occurs, rinse with water immediately.",
      ],
      requiredInfo: {
        storage: "Keep in a cool, dry place away from direct sunlight.",
        caution:
          "For external use only. Discontinue use if irritation occurs and consult a pediatrician.",
        suitability:
          "Safe for newborns and babies with sensitive skin; always patch-test on a small area first if unsure.",
        size: "Available in 8 oz (240 mL) bottles, perfect for home or travel.",
      },
    },
    buyingOptions : {
    amazoneUrl:"https://www.amazon.in/Manjistha-Dermatologist-Pediatrician-Tolerance-CLINICALLY/dp/B0F6YXY1LH/ref=sr_1_5?sr=8-5",
    flipKartUrl: "https://www.flipkart.com/adna-naturals-baby-diaper-rash-cream-blessed-manjistha-shea-butter-zinc-oxide/p/itm7f430e80c4068?pid=MSCHD3RPMMAJK9CN&marketplace=FLIPKART&cmpid=product.share.pp&_refId=PP.d0236223-2567-4baa-b673-31e4b1752082.MSCHD3RPMMAJK9CN&_appId=WA", 
    jiomartUrl:"https://www.jiomart.com/p/groceries/adna-naturals-milky-soft-baby-lotion-by-dr-aarti-and-dr-namrata-with-shea-butter-calendula-deep-moisturizing-hypoallergenic-gentle-skincare-for-newborns-infants/611325673",
    }
  },
  {
    id: "007",
    slug:'adna-naturals-tummy-roll-on-with-hing-saunf-ajwain-007',
    image: [
      "https://adnanaturals.com/assets/products/tummyroll/113.jpg",
      "https://adnanaturals.com/assets/products/tummyroll/114.jpg",
      "https://adnanaturals.com/assets/products/tummyroll/202.jpg",
    ],
    name: "ADNA Naturals Tummy Roll on with Hing, Saunf, Ajwain",
    price: 249.00,
    mrp:399.00,
    category: "Massage",
    description: "A gentle roll-on to ease your baby's tummy discomfort.",
    aboutThisItem:
      "Our baby tummy roll is formulated with natural essential oils known for their calming properties. Simply roll it onto your baby's tummy to provide relief from gas and bloating.",
    benefits: [
      "ADNA Naturals Tummy Roll on Enriched with Hing, Saunf, Ajwain, Sowa, Pudina",
      "Natural & Ayurvedic Properties Safe for Babies",
      "Curative Effect on Gas & Colic Problems, Indigestion, Constipation, Bloating, Acid Reflux",
      "Clinically Tested – Zero Tolerance to Toxins",
      "No Mineral Oil - No Silicones - No Parabens - No Sulphates",
      "Dermatologist Approved & Pediatrician Tested",
    ],
    ingredients: [
      {
        name: "Hing",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Saunf",
        description:
          "Antifungal, anti-inflammatory, and antibacterial soothing properties",
        icon: FaFlask,
      },
      {
        name: "Ajwain",
        description:
          "Prevents inflammation, moisturizes baby's skin & keeps it milky soft.",
        icon: FaSeedling,
      },
      {
        name: "Sowa",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Pudina",
        description: "Creates a protective shield for overall skin-wellness.",
        icon: FaFlask,
      },
    ],
    routines: {
      description: "",
      howToUse: [
        "Gently rub 'Adna Natural Tummy Roll on around your cute baby's navel area & lower abdomen for instant relief from upset tummy",
        "Relaxed Baby Tummy + Happy Mummy = ADNA Naturals Bonding Time",
      ],
      instructions: [
        "Apply liberally after bath time to lock in moisture while the skin is still slightly damp.",
        "For best results, pair with a mild baby wash to cleanse without stripping natural oils.",
        "Avoid applying near the eyes or mouth; if contact occurs, rinse with water immediately.",
      ],
      requiredInfo: {
        storage: "Keep in a cool, dry place away from direct sunlight.",
        caution:
          "For external use only. Discontinue use if irritation occurs and consult a pediatrician.",
        suitability:
          "Safe for newborns and babies with sensitive skin; always patch-test on a small area first if unsure.",
        size: "Available in 8 oz (240 mL) bottles, perfect for home or travel.",
      },
    },
    buyingOptions : {
    amazoneUrl:"https://www.amazon.in/No-Cranky-Tummy-Tears-Dermatologist-Pediatrician-Clinically/dp/B0F7RRR68T",
    flipKartUrl: "https://www.flipkart.com/adna-naturals-tummy-roll-babies-blessed-ayurvedic-properties-liquid/p/itm0d1dedc43e80e?pid=BPRHD3QTU2CGGKK9&lid=LSTBPRHD3QTU2CGGKK9OLDYYX&marketplace=FLIPKART&pageUID=1752243539095", 
    jiomartUrl:"https://www.jiomart.com/p/groceries/adna-naturals-milky-soft-baby-lotion-by-dr-aarti-and-dr-namrata-with-shea-butter-calendula-deep-moisturizing-hypoallergenic-gentle-skincare-for-newborns-infants/611325673",
    }
  },
  { 
    id: "008",
    slug: 'adna-naturals-baby-herbal-relief-balm-008',
    image: [
      "https://adnanaturals.com/assets/products/balm/118.jpg",
      "https://adnanaturals.com/assets/products/balm/119.jpg",
      "https://adnanaturals.com/assets/products/balm/200.jpg",
    ],
    name: "ADNA Naturals Baby Herbal Relief Balm | Blessed with Multi- Time-Honored Herbal Extracts of Narayani, Manjishtha, Jeshthamadh | 30 gms I ADNA Naturals Pioneered It – India’s First Baby Balm for Falls & Hurts: ‘BYE-BYE PAIN’ | CLINICALLY TESTED",
    price: 299.00,
    mrp: 401.00,
    category: "Massage",
    description: "BYE-BYE-PAIN",
    aboutThisItem:
      "ADNA Naturals Baby Herbal Relief Balm Enriched with Peppermint, Clove oil, Jeshthamadh, Cinnamomum, Narayani, Manjishtha, Raktachandan Punarnava",
    benefits: [
      "Controls Pain, Swelling, Stiffness & Helps to Restore Normal Functions",
      "No Dyes / Non-irritant, Suitable for Minor Skin",
      "Controls Your Baby & Pain, Swelling, Stiffness & Improves Mobility & Joint Stability.",
      "Clinically Tested – Zero Tolerance to Toxins",
      "No Silicones - No Parabens",
      "No Harmful Preservatives",
      "Dermatologically Approved & Pediatrician Tested",
    ],
    ingredients: [
      {
        name: "Manjishtha",
        description: "Effective in fighting baby rashes.",
        icon: FaLeaf,
      },
      {
        name: "Raktachandan Punarnava with Coconut Oil,",
        description:
          "Antifungal, anti-inflammatory, and antibacterial soothing properties",
        icon: FaFlask,
      },
      {
        name: "Rai",
        description:
          "Prevents inflammation, moisturizes baby's skin & keeps it milky soft.",
        icon: FaSeedling,
      },
      {
        name: "Nilgiri",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Devdaru",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Chahapati",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Rosha",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Lavang",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Dalchini",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
      {
        name: "Pudinaand",
        description:
          "Rich, creamy, and packed with essential fatty acids to keep your baby's skin happy and protected.",
        icon: FaLeaf,
      },
    ],
    routines: {
      description: "",
      howToUse: [
        "Babies are at risk of falling as they learn to roll, crawl, climb, & walk.",
        "Apply a thin layer of ADNA Baby Herbal Pain Relief Balm for quick recovery and relief from bumps and bruises and relax the pain.",
      ],
      instructions: [
        "Apply liberally after bath time to lock in moisture while the skin is still slightly damp.",
        "For best results, pair with a mild baby wash to cleanse without stripping natural oils.",
        "Avoid applying near the eyes or mouth; if contact occurs, rinse with water immediately.",
      ],
      requiredInfo: {
        storage: "Keep in a cool, dry place away from direct sunlight.",
        caution:
          "For external use only. Discontinue use if irritation occurs and consult a pediatrician.",
        suitability:
          "Safe for newborns and babies with sensitive skin; always patch-test on a small area first if unsure.",
        size: "Available in 8 oz (240 mL) bottles, perfect for home or travel.",
      },
    },
    buyingOptions : {
    amazoneUrl:"https://www.amazon.in/Naturals-Time-Honored-Manjishtha-Jeshthamadh-Clinically/dp/B0FPB8G5S5/ref=ast_sto_dp_puis",
    flipKartUrl: "https://www.flipkart.com/adna-naturals-baby-herbal-relief-balm-blessed-multi-herbal-extracts-gel/p/itmb3f2ac088b3f4?pid=BPRHD3MC3YFY7STM&lid=LSTBPRHD3MC3YFY7STMZVZK3Z&marketplace=FLIPKART&hl_lid=&q=adna+gel+30+g&store=kyh%2Fg83%2Fodp&pageUID=1752073088713", 
    jiomartUrl:"https://www.jiomart.com/p/groceries/adna-naturals-milky-soft-baby-lotion-by-dr-aarti-and-dr-namrata-with-shea-butter-calendula-deep-moisturizing-hypoallergenic-gentle-skincare-for-newborns-infants/611325673",
    }
  },
];

export default products;
