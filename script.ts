import path from 'path';
import fs from 'fs';


export const appNavigationLinking= {
  config: {
    initialRouteName: 'MainTabs',
    screens: {
      MainTabs: {
        screens: {
          HomeTab: {
            screens: {
              Home: { path: '', exact: true },
            },
          },
          MenuTab: {
            screens: {
              Locations: { path: 'locations', exact: true },

              // A "placeholder" route that will always redirect users to the
              // menu or delivery menu route if the location slug or address ID
              // is available, or to the location selection route if it is not.
              MenuWithoutSlug: { path: 'menu', exact: true },

              Menu: { path: ':restaurantSlug/menu', exact: true },
              DeliveryMenu: {
                path: 'delivery/:addressId/menu',
                exact: true,
              },
              MenuCollection: {
                path: ':restaurantSlug/collections/:menuCollectionId',
                exact: true,
              },
              DeliveryMenuCollection: {
                path: 'delivery/:addressId/collections/:menuCollectionId',
                exact: true,
              },
            },
          },
          LoyaltyTab: {
            screens: {
              SweetpassHome: { path: 'sweetpass', exact: true },
            },
          },
          AccountTab: {
            initialRouteName: 'AccountMenu',
            screens: {
              AccountMenu: { path: 'account/menu', exact: true },
              Profile: { path: 'account/info', exact: true },
              SweetpassMembership: {
                path: 'account/sweetpass/membership',
                exact: true,
              },
              PaymentCredit: { path: 'account/payment-credit', exact: true },
              Addresses: { path: 'account/addresses', exact: true },
              Orders: { path: 'account/orders', exact: true },
              Favorites: { path: 'account/favorites', exact: true },
              ReferFriend: { path: 'account/refer-friend', exact: true },
              AccountDietaryRestrictions: {
                path: 'account/dietary-restrictions',
                exact: true,
              },
            },
          },
        },
      },
      Modal: {
        screens: {
          ProductDetails: {
            path: ':restaurantSlug/:productSlug',
            exact: true,
          },
          EditProductDetails: {
            path: ':restaurantSlug/:productSlug/edit/:lineItemId',
            exact: true,
          },
          DeliveryProductDetails: {
            path: 'delivery/:addressId/:productSlug',
            exact: true,
          },
          DeliveryEditProductDetails: {
            path: 'delivery/:addressId/:productSlug/edit/:lineItemId',
            exact: true,
          },

          DeliveryOrderInFlight: {},

          ReorderConfirmLocation: {},
          ReorderChangeLocation: {},
          ReorderConflictReview: {},
          ReorderActiveBagWarning: {},

          PersonalData: { path: 'ca-data-requests', exact: true },
          PersonalDataDetails: {},

          Bag: {},
          Checkout: { path: 'checkout', exact: true },

          OrderStatus: { path: 'order-status/:orderId', exact: true },

          ScanToPay: { path: 'scan-to-pay', exact: true },
          ScanInStore: { path: 'scan-in-store', exact: true },
          Payments: {
            path: 'payment/list',
            exact: true,
          },
          PaymentCredit: {
            path: 'payment/select',
            exact: true,
          },
          CreditAdd: {
            path: 'credit/add',
            exact: true,
          },
          CreditScan: {
            path: 'credit/scan',
            exact: true,
          },
          CreditDetails: {
            path: 'credit',
            exact: true,
          },

          DietaryRestrictions: {
            path: 'dietary-restrictions',
            exact: true,
          },
          RateOrder: { path: 'feedback/:orderId', exact: true },
          ShareLineItem: { path: 'share/:lineItemSlug', exact: true },

          SweetpassBenefits: { path: 'sweetpass/benefits', exact: true },
          SweetpassUpgrade: { path: 'sweetpass/upgrade', exact: true },
          SweetpassCheckout: { path: 'sweetpass/checkout', exact: true },
          SweetpassPaymentMethodEdit: {
            path: 'sweetpass/payment/:paymentMethodId',
            exact: true,
          },
          SweetpassPaymentMethodAdd: {
            path: 'sweetpass/payment/add',
            exact: true,
          },
          SweetpassBillingHistory: {
            path: 'sweetpass/membership/billing-history',
            exact: true,
          },

          OrderProductConfirmProduct: {
            path: '/order-product/:productSlug',
            exact: true,
          },
          OrderProductConfirmLocation: {
            path: '/order-product/:productSlug/confirm-location',
            exact: true,
          },
          OrderProductSearchLocation: {
            path: '/order-product/:productSlug/search-location',
            exact: true,
          },
        },
      },
      Auth: {
        screens: {
          Login: { path: 'login', exact: true },
          Join: { path: 'join', exact: true },
          JoinVerification: { path: 'register/verify', exact: true },
          ForgotPassword: { path: 'forgot-password', exact: true },
        },
      },
      Error: {
        screens: {
          NotFoundWithRestaurantSlug: { path: ':restaurantSlug', exact: true },
          NotFound: { path: '*' },
        },
      },
    },
  },
};

const makeScreenComponent = (name:string, links:SiblingChildrenResult) => {
  return `import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>${name}</Text>

        <Text>Sibling Links</Text>
        ${links.siblings.map(link => {
          return (
            `<Link href="/${link}">${link}</Link>`
          )
        })}

        <Text>Child Links</Text>
        ${links.children.map(link => {
          return (
            `<Link href="/${link}">${link}</Link>`
          )
        })}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  `
}


const makeLayoutComponent = () => {
  return `import { Stack } from 'expo-router/stack';

  export default function Layout() {
    return <Stack />;
  }
`  
}

// ─────────────────────────────────────────────────────────────────────────────



const normalizeDynamicPathParam = (segment: string): string => segment.startsWith(':') ? `[${segment.slice(1)}]` : segment;

const removeLeadingSlash = (s: string): string => s.replace(/^\//, '');

const removeLeadingAsterisk = (s: string): string => s.startsWith('*') ? '' : s;

const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x);

const getNewPath = (node: any): string => {
  if (node.hasOwnProperty('path')) {
    return pipe(
      (s:any) => s.split('/').map(normalizeDynamicPathParam).join('/'),
      removeLeadingSlash,
      removeLeadingAsterisk
    )(node.path);
  }
  return '';
}

const processNode = (node: any, path: string[] = []): any => {
  return Object.entries(node).reduce((acc: any, [key, value]: [string, any]) => {
    if (value.hasOwnProperty('screens')) {
      acc[key] = processNode(value.screens, [...path, key]);
    } else {
      const newPath = getNewPath(value);
      if (newPath) {
        acc.paths = acc.paths || [];
        acc.paths.push(newPath);
      }
    }
    return acc;
  }, {});
}

const { config } = processNode(appNavigationLinking);


// ─────────────────────────────────────────────────────────────────────────────

const reprocessNode = (node: any, path: string[] = []): any => {
  return Object.entries(node).reduce((acc: string[], [key, value]: [string, any]) => {
    const newPath = [...path, `(${key})`];

    const maybeLayout = key.endsWith('Tab') ? [...newPath, '_layout'].join('/') : ''
    // console.log(maybeLayout, key)
    
    if (Object.values(value).length === 0) {
      const indexPath = [...newPath, 'index'].join('/')
      return [...acc, indexPath, maybeLayout];
    }


    if (value.hasOwnProperty('paths')) {
      const processedPaths = value.paths.map((p: string) => [...newPath, `${p}`].join('/'));
      return [...acc, ...processedPaths, maybeLayout];
    }
    return [...acc, ...reprocessNode(value, newPath)];
  }, []);
}

const processedConfig = reprocessNode(config);
// console.log(processedConfig)

function addMissingIndex(paths: string[]) {
  return paths.reduce((acc: string [], currentPath:string) => {
    const isParentFolder = paths.some((testPath: string) => ((testPath.split(currentPath).length > 1) && (testPath !== currentPath)))
    const alreadyHasIndex = paths.includes(`${currentPath}/index`)

    if(!currentPath.length) return acc
    return isParentFolder && !alreadyHasIndex && currentPath.length
      ? [...acc, `${currentPath}/index`]
      : [...acc, currentPath];
  }, [])
}


const newPaths = addMissingIndex(processedConfig);


type Path = string;

interface SiblingChildrenResult {
  siblings: Path[];
  children: Path[];
}

const findSiblingsAndChildren = (paths: Path[], targetPath: Path): SiblingChildrenResult => {
  const targetSegments = targetPath.split('/');
  const targetParentPath = targetSegments.slice(0, targetSegments.length - 1).join('/');

  return paths.reduce((result: SiblingChildrenResult, rawPath: Path) => {
    const [path] = rawPath.split("index");

    if(path.includes("[")) return result
    if(path.includes("_")) return result
    if(path.includes("_")) return result

    const pathSegments = path.split('/');
    const parentPath = pathSegments.slice(0, pathSegments.length - 1).join('/');

    if (parentPath === targetParentPath && path !== targetPath) {
      return { ...result, siblings: [...result.siblings, path] };
    }

    if (path.startsWith(targetPath)) {
      return { ...result, children: [...result.children, path] };
    }

    return result;

  }, { siblings: [], children: [] });
}
const handleFileWrite = (newPath: string, links:SiblingChildrenResult): void => {
  const [name, ...rest] = (newPath.split("/")).reverse();
  const parentDir = rest.reverse().join('/'); 
  if (!fs.existsSync(newPath)) {
    fs.mkdirSync(parentDir, { recursive: true });
  }
  
  const content = newPath.endsWith('_layout') ? makeLayoutComponent() :  makeScreenComponent(name, links)
  fs.writeFileSync(`${newPath}.tsx`, content);
}

newPaths.map((path:string) => { 
  const links = findSiblingsAndChildren(newPaths, path);
  handleFileWrite(path, links);
  // console.log(path);
})
