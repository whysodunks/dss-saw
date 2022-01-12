import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/'
import HomePage from '@/pages/HomePage'
import SettingData from '@/pages/SettingData'
import Notification from '@/pages/Menu/Notification'
import Login from '@/pages/Menu/Login'
import HowTo from '@/pages/Menu/HowTo'
import Chart from '@/pages/Menu/Chart'
import NotFound from '@/pages/Menu/404'
import ScrapCalculator from '@/pages/Menu/ScrapCalculator'
import ScrapCalculatorSilver from '@/pages/Menu/ScrapCalculatorSilver'
import Investasi from '@/pages/Menu/Investasi'
import TermAndConditions from '@/pages/General/TermConditions'
import PrivacyPolicy from '@/pages/General/PrivacyPolicy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: "Decision Support System"
      },
      children: [
      	{
          path: '/',
          name: 'HomePage',
          component: HomePage,
          meta: {
            title: "Decision Support System"
          }
        },
        {
          path: '/setting-data',
          name: 'SettingData',
          component: SettingData,
          meta: {
            title: "Setting Data - Decision Support System"
          }
        },
        {
          path: '/tools',
          name: 'ScrapCalculator',
          component: ScrapCalculator,
          meta: {
            title: "Scrap Calculator"
          }
        },
        {
          path: '/tools-silver',
          name: 'ScrapCalculatorSilver',
          component: ScrapCalculatorSilver,
          meta: {
            title: "Scrap Calculator Silver"
          }
        },
        {
          path: '/investasi',
          name: 'Investasi',
          component: Investasi,
          meta: {
            title: "Investasi"
          }
        },
        {
          path: '/login',
          name: 'Login',
          component: Login,
          meta: {
            title: "Login"
          }
        },
        {
          path: '/notification',
          name: 'Notification',
          component: Notification,
          meta: {
            title: "Notification"
          }
        },
        {
          path: '/how',
          name: 'HowTo',
          component: HowTo,
          meta: {
            title: "HowTo"
          }
        },
        {
          path: '/chart',
          name: 'Chart',
          component: Chart,
          meta: {
            title: "Chart"
          }
        },
        {
          path: '/404',
          name: '404',
          component: NotFound,
          meta: {
            title: "404"
          }
        },
        {
          path: '/term-and-conditions',
          name: 'TermAndConditions',
          component: TermAndConditions,
          meta: {
            title: "Term and Conditions"
          }
        },
        {
          path: '/privacy-policy',
          name: 'PrivacyPolicy',
          component: PrivacyPolicy,
          meta: {
            title: "Privacy Policy"
          }
        }
      ]
    }
  ],
  mode: 'history'
})
