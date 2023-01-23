import '@/bootstrap';

// Home / About:
import '@/pages/home/__home.jsx';
import '@/pages/about/__about.jsx';
import '@/pages/about/__contact.jsx';

// Admin:
import '@/pages/admin/__admin.jsx';
import '@/pages/admin/__products.jsx';
import '@/pages/admin/orders/__orders.jsx';
import '@/pages/admin/orders/[id].jsx';

// Store:
import '@/pages/store/__store.jsx';
import '@/pages/store/product/__product.jsx';

// Auth:
import '@/pages/auth/login/__login.jsx';

// Dev:
import '@/pages/anim/anim-3/_page-anim.jsx';

// ==============================================

import { lo, lg, lr, lb, ly } from '@/util/log';

// ==============================================

lg('VITE: resources/js/app.js');
