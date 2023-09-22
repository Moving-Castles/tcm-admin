import { infoDecorator } from "./decorators/InfoDecorator"
import { failureDecorator } from "./decorators/FailureDecorator"
import { successDecorator } from "./decorators/SuccessDecorator"
import { quoteDecorator } from "./decorators/QuoteDecorator"
import { alertDecorator } from "./decorators/AlertDecorator"

export default {
    title: 'Content editor',
    type: 'object',
    name: 'contentEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Content editor',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' }
                    ],
                    lists: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Info',
                                value: 'info',
                                icon: () => 'I',
                                component: infoDecorator
                            },
                            {
                                title: 'Alert',
                                value: 'alert',
                                icon: () => 'A',
                                component: alertDecorator
                            },
                            {
                                title: 'Failure',
                                value: 'failure',
                                icon: () => 'F',
                                component: failureDecorator
                            },
                            {
                                title: 'Success',
                                value: 'success',
                                icon: () => 'S',
                                component: successDecorator
                            },
                            {
                                title: 'Quote',
                                value: 'quote',
                                icon: () => 'Q',
                                component: quoteDecorator
                            },
                        ],
                        annotations: [],
                    },
                },
            ]
        }
    ]
}