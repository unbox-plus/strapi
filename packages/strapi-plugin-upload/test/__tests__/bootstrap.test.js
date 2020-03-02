const bootstrap = require('../../config/functions/bootstrap');

describe('Upload plugin bootstrap function', () => {
  test('Sets default config if id does not exist', async () => {
    const setStore = jest.fn(() => {});

    global.strapi = {
      config: {
        info: {
          dependencies: {},
        },
      },
      plugins: {
        upload: { config: {} },
      },
      store() {
        return {
          get() {
            return null;
          },
          set: setStore,
        };
      },
    };

    await bootstrap();

    expect(setStore).toHaveBeenCalledWith({
      value: {
        sizeOptimization: true,
        videoPreview: true,
        responsiveDimensions: true,
      },
    });
  });
});