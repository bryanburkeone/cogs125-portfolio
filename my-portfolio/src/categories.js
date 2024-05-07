export const categories = [
    {
      id: 'mens',
      color: 'blue',
      basePosition: { x: 0, y: 150 },
      label: "Men's Clothes",
      products: [
        {
          id: 'shirts',
          label: 'Shirts',
          color: 'lightblue',
          items: [
            { id: 'casual', label: 'Casual Shirt', color: 'lightblue', },
            { id: 'formal', label: 'Formal Shirt', color: 'lightblue', }
          ]
        },
        {
          id: 'socks',
          label: 'Socks',
          color: 'navy',
          items: [
            { id: 'ankle', label: 'Ankle Socks', color: 'lightblue', },
            { id: 'crew', label: 'Crew Socks', color: 'lightblue', }
          ]
        },
        {
          id: 'jeans',
          label: 'Jeans',
          color: 'darkblue',
          items: [
            { id: 'slim', label: 'Slim Jeans', color: 'lightblue'  },
            { id: 'regular', label: 'Regular Jeans', color: 'lightblue'}
          ]
        }
      ]
    },
    {
      id: 'womens',
      color: 'red',
      basePosition: { x: 300, y: 150 },
      label: "Women's Clothes",
      products: [
        {
          id: 'dresses',
          label: 'Dresses',
          color: 'pink',
          items: [
            { id: 'evening', label: 'Evening Dress', color: 'lightblue' },
            { id: 'summer', label: 'Summer Dress', color: 'lightblue' }
          ]
        },
        {
          id: 'tops',
          label: 'Tops',
          color: 'crimson',
          items: [
            { id: 'blouse', label: 'Blouse', color: 'lightblue' },
            { id: 't-shirt', label: 'T-Shirt', color: 'lightblue' }
          ]
        },
        {
          id: 'skirts',
          label: 'Skirts',
          color: 'red',
          items: [
            { id: 'mini', label: 'Mini Skirt', color: 'lightblue' },
            { id: 'maxi', label: 'Maxi Skirt', color: 'lightblue' }
          ]
        }
      ]
    },
    {
      id: 'kids',
      color: 'green',
      basePosition: { x: 600, y: 150 },
      label: "Kids' Clothes",
      products: [
        {
          id: 'toys',
          label: 'Toys',
          color: 'lightgreen',
          items: [
            { id: 'doll', label: 'Doll', color: 'lightblue'  },
            { id: 'car', label: 'Toy Car', color: 'lightblue'}
          ]
        },
        {
          id: 'games',
          label: 'Games',
          color: 'darkgreen',
          items: [
            { id: 'board', label: 'Board Game', color: 'lightblue' },
            { id: 'puzzle', label: 'Puzzle', color: 'lightblue' }
          ]
        },
        {
          id: 'clothes',
          label: 'Clothes',
          color: 'olive',
          items: [
            { id: 'shirt', label: 'Shirt', color: 'lightblue' },
            { id: 'pants', label: 'Pants', color: 'lightblue' }
          ]
        }
      ]
    }
  ];
  