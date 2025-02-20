/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const AuthController = () => import('#controllers/admin/auth_controller')
const HomeController = () => import('#controllers/home_controller')
const DashboardController = () => import('#controllers/admin/dashboard_controller')
const ProductController = () => import('#controllers/admin/product_controller')
const CategoryController = () => import('#controllers/admin/category_controller')
const AttributesController = ()=>import('#controllers/admin/attributes_controller')
const HomeApiController = ()=>import('#controllers/apis/home_api_controller')
const CustomerApiController = ()=>import('#controllers/apis/customer_api_controller')
const CartApiController = ()=>import('#controllers/apis/cart_api_controller')
// router.on('/').renderInertia('web/home')
router.get('/', [HomeController, 'index'])//.use(middleware.customer())
router.get('/cart', [HomeController, 'cart'])
router.get('/checkout', [HomeController, 'checkout'])

router.get('/csrf-token', async ({ response, request }) => {
    return response.json({ csrfToken: request.csrfToken})
})

router.group(() => {


}).use(middleware.customer())

//**************Apis Router******************/
router.group(() => {
    router.get('/categories', [HomeApiController, 'getCategories'])
    router.get('/products', [HomeApiController, 'gatProducts'])

    router.post('/cart/save', [CartApiController, 'saveCart'])
    router.get('/cart/load', [CartApiController, 'getCart'])

    router.post('/customer/send-otp', [CustomerApiController, 'sendOtp'])
    router.post('/customer/verify-otp', [CustomerApiController, 'verifyOtp'])
    router.post('/logout', [CustomerApiController, 'logout'])
}).prefix('/api')
//**************Apis Router [End]******************/



//**************Admin Router******************/

router.group(() => {
    router.get('/', [AuthController, 'adminLogin']).use(middleware.guest())
    router.get('/sign-in', [AuthController, 'adminLogin']).use(middleware.guest())
    router.get('/login', [AuthController, 'adminLogin']).use(middleware.guest())
    router.get('/sign-up', [AuthController, 'adminSignUp']).use(middleware.guest())
    router.post('/login',[AuthController, 'adminAuth'])
    router.post('/sign-up',[AuthController, 'adminRegister']).as('auth.store')

    router.group(() => {
        router.get('/logout', async ({ auth, response }) => {
            await auth.use('web').logout()
            return response.redirect('/admin')
        })
        router.get('/dashboard', [DashboardController, 'dashboard'])
        
        router.get('/add-new-category', [CategoryController, 'add'])
        router.get('/edit-category/:id', [CategoryController, 'edit'])
        router.get('/category/max-index',[CategoryController,'getMaxShortIndex'])
        router.get('/category/all-parents',[CategoryController,'getAllParentCategories'])
        router.get('/category/sub-categories/:id',[CategoryController,'getSubCategories'])
        router.post('/category/add', [CategoryController, 'saveCategory'])
        router.post('/category/edit/:id', [CategoryController, 'editCategory'])
        router.get('/categories', [CategoryController, 'categories'])
        router.get('/category/change-status/:id', [CategoryController, 'changeStatus'])

        router.get('/add-new-attributes', [AttributesController, 'add'])
        router.get('/attributes', [AttributesController, 'attributes'])
        router.get('/attribute/change-status/:id', [AttributesController, 'changeStatus'])
        router.get('/attribute/change-required/:id', [AttributesController, 'changeRequired'])
        router.get('/attributes/:category', [AttributesController, 'getAttributes'])
        

        router.post('/attributes/add', [AttributesController, 'saveAttribute'])
        
        
        router.get('/products', [ProductController, 'products'])
        router.get('/add-new-product', [ProductController, 'add'])
        router.get('/upload-product-images/:id', [ProductController, 'uploadImages'])
        router.post('/product/attribute/file-upload', [ProductController, 'fileUpload'])
        router.post('/product/add', [ProductController, 'saveProduct'])
        router.post('/product/update-video-url/:id',[ProductController,'updateVideoUrl'])
        router.post('/product/upload-images/:id',[ProductController,'updateProductImages'])
        router.post('/product/remove-product-image',[ProductController,'removeProductImages'])
        router.post('/product/set-default-product-image',[ProductController,'setDefaultImage'])
        router.get('/product/change-status/:id',[ProductController,'changeStatus'])
        router.get('/product/change-is-top/:id',[ProductController,'setTopProduct'])
        router.get('/product/change-featured/:id',[ProductController,'setFeaturedProduct'])
        router.get('/syncProductsWithAlgolia',[ProductController,'syncProductsWithAlgolia'])
        

    }).use(middleware.auth())
}).prefix('/admin')


