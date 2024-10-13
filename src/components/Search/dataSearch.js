
// loads all images in the folder dynamically
const importAll = (r) => {
        let images = {};
        try {
          r.keys().forEach((item, index) => {
            try {
              images[item.replace('./', '')] = r(item);
            } catch (error) {
              console.error(`Error importing image ${item}: ${error.message}`);
            }
          });
        } catch (error) {
          console.error(`Error importing images: ${error.message}`);
        }
        return images;
      };
      
      // img de '../../img/'
      const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));
      
      export const books = [
        { name: 'The Great Gatsby', src: images['Gatsby.jpg'] },
        { name: 'To Kill a Mockingbird', src: images['Kill.jpg'] },
        { name: '1984', src: images['1984.jpg'] },
        { name: 'Pride and Prejudice', src: images['Pride and Prejudice.jpg'] },
        { name: 'The Catcher in the Rye', src: images['Catcher.jpg'] },
        { name: 'Brave New World', src: images['Brave.jpg'] },
        { name: 'Lord of the Flies', src: images['Lord of the Flies.jpg'] },
        { name: 'Animal Farm', src: images['Animal Farm.jpg'] },
        { name: 'Fahrenheit 451', src: images['Fahrenheit 451.jpg'] },
        { name: 'The Hobbit', src: images['The Hobbit.jpg'] }
      ];
      