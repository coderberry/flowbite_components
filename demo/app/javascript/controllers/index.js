// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import { lazyLoadControllersFrom } from '@hotwired/stimulus-loading'
lazyLoadControllersFrom('controllers', application)

import { registerFlowbiteControllers } from "flowbite-components"
registerFlowbiteControllers(application)

import { registerFlowbiteControllers } from "flowbite-components"
registerFlowbiteControllers(Stimulus)
