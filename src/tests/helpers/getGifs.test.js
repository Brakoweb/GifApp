import {getGifs} from '../../helpers/getGifs';

describe('Testing getGifs Fetch', () => {

    test('should have 10 elements', async() => {
        const gifs = await  getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });

    test('should bring 0 elements', async() => {
        const gifs = await  getGifs('');

        expect(gifs.length).toBe(0);
    })
    
    
})