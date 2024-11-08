export const mock1 = {
    passes: [
        {
            "id": "aria-hidden-body",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag131",
                "wcag412",
                "EN-301-549",
                "EN-9.1.3.1",
                "EN-9.4.1.2"
            ],
            "description": "Ensure aria-hidden=\"true\" is not present on the document body.",
            "help": "aria-hidden=\"true\" must not be present on the document body",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-hidden-body?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "aria-hidden-body",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "No aria-hidden attribute is present on document body"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<body>",
                    "target": [
                        "body"
                    ]
                }
            ]
        },
        {
            "id": "bypass",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "wcag2a",
                "wcag241",
                "section508",
                "section508.22.o",
                "TTv5",
                "TT9.a",
                "EN-301-549",
                "EN-9.2.4.1"
            ],
            "description": "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
            "help": "Page must have means to bypass repeated blocks",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/bypass?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "header-present",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<h1>Accessibility in Media: Tip Sheet &amp; Resources</h1>",
                                    "target": [
                                        "h1"
                                    ]
                                },
                                {
                                    "html": "<h4>What is accessibility?</h4>",
                                    "target": [
                                        "h4:nth-child(4)"
                                    ]
                                },
                                {
                                    "html": "<h4>Why is accessibility important?</h4>",
                                    "target": [
                                        "h4:nth-child(8)"
                                    ]
                                },
                                {
                                    "html": "<h4>What areas of journalism should be thinking about accessibility?</h4>",
                                    "target": [
                                        "h4:nth-child(14)"
                                    ]
                                },
                                {
                                    "html": "<h4>Resources</h4>",
                                    "target": [
                                        "h4:nth-child(17)"
                                    ]
                                },
                                {
                                    "html": "<h5>Accessibility guidelines/resources from news organizations</h5>",
                                    "target": [
                                        "h5:nth-child(18)"
                                    ]
                                },
                                {
                                    "html": "<h5>Good reads</h5>",
                                    "target": [
                                        "h5:nth-child(20)"
                                    ]
                                },
                                {
                                    "html": "<h5>Web accessibility tutorials</h5>",
                                    "target": [
                                        "h5:nth-child(22)"
                                    ]
                                },
                                {
                                    "html": "<h5>Alt text guidelines</h5>",
                                    "target": [
                                        "h5:nth-child(24)"
                                    ]
                                },
                                {
                                    "html": "<h5>Colors and design</h5>",
                                    "target": [
                                        "h5:nth-child(26)"
                                    ]
                                },
                                {
                                    "html": "<h5>Screen readers and voiceover</h5>",
                                    "target": [
                                        "h5:nth-child(28)"
                                    ]
                                },
                                {
                                    "html": "<h5>Closed captioning and audio description resources</h5>",
                                    "target": [
                                        "h5:nth-child(30)"
                                    ]
                                },
                                {
                                    "html": "<h5>Social media</h5>",
                                    "target": [
                                        "h5:nth-child(32)"
                                    ]
                                },
                                {
                                    "html": "<h5>Testing tools</h5>",
                                    "target": [
                                        "h5:nth-child(34)"
                                    ]
                                },
                                {
                                    "html": "<h5>Resources/guidelines from other industries</h5>",
                                    "target": [
                                        "h5:nth-child(36)"
                                    ]
                                },
                                {
                                    "html": "<h5>Interesting examples</h5>",
                                    "target": [
                                        "h5:nth-child(38)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Page has a heading"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<html lang=\"en\">",
                    "target": [
                        "html"
                    ]
                }
            ]
        },
        {
            "id": "color-contrast",
            "impact": null,
            "tags": [
                "cat.color",
                "wcag2aa",
                "wcag143",
                "TTv5",
                "TT13.c",
                "EN-301-549",
                "EN-9.1.4.3",
                "ACT"
            ],
            "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
            "help": "Elements must meet minimum color contrast ratio thresholds",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "24.0pt (32px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "3:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h1>Accessibility in Media: Tip Sheet &amp; Resources</h1>",
                    "target": [
                        "h1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>Join our email group to continue to chat, ask for help, share resources: <a href=\"https://groups.google.com/forum/#!forum/a11y-journalism/join\" target=\"_blank\">a11y-journalism@googlegroups.com</a></p>",
                    "target": [
                        "p:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://groups.google.com/forum/#!forum/a11y-journalism/join\" target=\"_blank\">a11y-journalism@googlegroups.com</a>",
                    "target": [
                        "a[target=\"_blank\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"./bad-example.html\">Demo: Inaccessible example</a>",
                    "target": [
                        "a[href$=\"bad-example.html\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>What is accessibility?</h4>",
                    "target": [
                        "h4:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>According to the <a href=\"http://www.bbc.co.uk/accessibility/best_practice/what_is.shtml\">BBC</a>, accessibility is used to describe \"whether a product (for example, a website, mobile site, digital TV interface or application) can be used by people of all abilities and disabilities.\"</p>",
                    "target": [
                        "p:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.bbc.co.uk/accessibility/best_practice/what_is.shtml\">BBC</a>",
                    "target": [
                        "p:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>For journalism in particular, accessibility issues could include any of the following:</p>",
                    "target": [
                        "p:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Web: Could a screen reader read your website in a way that makes your content make sense?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Podcast/videos: Can someone who is hard of hearing, deaf or blind understand the content in your podcasts or videos? What about someone on a noisy train?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Language: Is your content easy to understand? How do you explain complex terms and jargon? Is your content in a language that your audience will understand?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Access: Can people find your content and get access to it from their location? How much does loading your website cost? How hard is it for someone to get access to your article?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Design: How easy is it for someone to navigate your site? Could a user with Parkinson's disease navigate through your mobile app? Is there enough contrast in your color choices? Is your font easy for dyslexic people to read?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>Why is accessibility important?</h4>",
                    "target": [
                        "h4:nth-child(8)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>If you don't care about it, a large group of people will never be able to access or experience the content you create. For example:\n\t\t</p>",
                    "target": [
                        "p:nth-child(9)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>15 percent (or 37.5 million) American adults report having trouble hearing (<a href=\"http://www.rnib.org.uk/knowledge-and-research-hub/key-information-and-statistics\">NIDCD</a>)</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.rnib.org.uk/knowledge-and-research-hub/key-information-and-statistics\">NIDCD</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>2.3 percent of Americans and 6.8 percent of Americans over 65 have a visual disability (<a href=\"https://nfb.org/blindness-statistics\">NFB</a>)</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://nfb.org/blindness-statistics\">NFB</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.colour-blindness.com/general/prevalence/\">7-10 percent</a> of males have red-green color blindness</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.colour-blindness.com/general/prevalence/\">7-10 percent</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>",
                    "target": [
                        "p:nth-child(11)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>And at the end of the day, even if you don't care about any of the above, depending on where you work and what you're doing, you could be <a href=\"http://webaim.org/articles/laws/usa/\">legally required</a> to care.</p>",
                    "target": [
                        "p:nth-child(13)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/articles/laws/usa/\">legally required</a>",
                    "target": [
                        "p:nth-child(13) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>What areas of journalism should be thinking about accessibility?</h4>",
                    "target": [
                        "h4:nth-child(14)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>The short answer is everyone! But more specifically, here are a few groups in particular and some prompts to get you thinking.</p>",
                    "target": [
                        "p:nth-child(15)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Content: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Are your links on descriptive words or phrases so that people on screen readers jumping between links know what each link goes to?</li>",
                    "target": [
                        "ul:nth-child(2) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is your content free of jargon? Could your content benefit from being translated into another language?</li>",
                    "target": [
                        "ul:nth-child(2) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Images and graphics: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>What should alt text include? How much alt text should you write?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is there enough contrast in your color palette? Is your color palette color-blind friendly? Is the font size big enough on all size screens?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>If the graphic is interactive, is there a clear way to interact with the graphic?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is your <a href=\"https://www.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/\">SVG accessible</a>?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/\">SVG accessible</a>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Audio and video: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you provide transcriptions or closed captioning on a quick turnaround?</li>",
                    "target": [
                        "ul:nth-child(6) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>For which videos should we provide audio description?</li>",
                    "target": [
                        "ul:nth-child(6) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Social media/audience engagement: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(7)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you make all of your social media content more accessible?</li>",
                    "target": [
                        "ul:nth-child(8) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you build in accessible ways for your readers to engage with you?</li>",
                    "target": [
                        "ul:nth-child(8) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Product management:</li>",
                    "target": [
                        "li:nth-child(9)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>News doesn't stop for anyone. How can you build in accessibility into a quick turnaround design and development process?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you get institutional buy-in for accessibility?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Who is your audience, what needs are not being met and how do you reach an even larger audience?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Design/development:</li>",
                    "target": [
                        "li:nth-child(11)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Before launching new projects, are you going through accessibility checklists? Are you taking advantage of core HTML elements and ARIA?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you use \"visually hidden elements\" to guide a screen reader user through your page?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you help screen reader users navigate around ads? Around menus?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How long does it take for a page to load? How much would that cost a user?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>QA/Testing:</li>",
                    "target": [
                        "li:nth-child(13)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Who are you using for your UX testing? Are you also experience testing?</li>",
                    "target": [
                        "ul:nth-child(14) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you make sure your testers reflect your audience? Are you missing anyone?</li>",
                    "target": [
                        "ul:nth-child(14) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>Resources</h4>",
                    "target": [
                        "h4:nth-child(17)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Accessibility guidelines/resources from news organizations</h5>",
                    "target": [
                        "h5:nth-child(18)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.bbc.co.uk/guidelines/futuremedia/\">BBC</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://accessibility.voxmedia.com/\">Vox Product</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://yahooaccessibility.tumblr.com/\">Yahoo! Accessibility Lab</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Good reads</h5>",
                    "target": [
                        "h5:nth-child(20)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://medium.com/@ablerism/beyond-alt-text-103b00eec89\">Beyond alt-text</a> (Sara Hendren)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://medium.com/@ablerism/beyond-alt-text-103b00eec89\">Beyond alt-text</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://knightlab.northwestern.edu/2016/06/13/a-bigger-tent-how-new-techniques-and-technology-can-help-journalists-reach-more-people/\">How new techniques and technology can help journalists reach more people</a> (Knight Lab)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://knightlab.northwestern.edu/2016/06/13/a-bigger-tent-how-new-techniques-and-technology-can-help-journalists-reach-more-people/\">How new techniques and technology can help journalists reach more people</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.amazon.com/Design-Meets-Disability-MIT-Press/dp/0262516748\">Design Meets Disability</a> (Graham Pullin)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.amazon.com/Design-Meets-Disability-MIT-Press/dp/0262516748\">Design Meets Disability</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Web accessibility tutorials</h5>",
                    "target": [
                        "h5:nth-child(22)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/\">WebAIM</a>",
                    "target": [
                        "a[href$=\"webaim.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://teachaccess.github.io/tutorial/\">TeachAccess web accessibility tutorial</a>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://a11yproject.com/\">The A11Y Project</a>",
                    "target": [
                        "a[href$=\"a11yproject.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://pages.18f.gov/accessibility/\">18F Accessibility Guide</a>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Alt text guidelines</h5>",
                    "target": [
                        "h5:nth-child(24)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://webaim.org/techniques/alttext/\">Alt text: guidelines and examples</a> (WebAIM)</li>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/techniques/alttext/\">Alt text: guidelines and examples</a>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://cfpb.github.io/design-manual/data-visualization/accessibility.html#alt-tags?cn=cmVwbHk%3D\">Alt text for charts</a> (Consumer Financial Protection Bureau)</li>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://cfpb.github.io/design-manual/data-visualization/accessibility.html#alt-tags?cn=cmVwbHk%3D\">Alt text for charts</a>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Colors and design</h5>",
                    "target": [
                        "h5:nth-child(26)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://michelf.ca/projects/sim-daltonism/\">Sim Daltonism</a>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://colorbrewer2.org/\">Colorbrewer</a>",
                    "target": [
                        "a[href$=\"colorbrewer2.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.checkmycolours.com/\">Check my Colours</a>",
                    "target": [
                        "a[href$=\"checkmycolours.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://jxnblk.com/colorable/demos/text/\">Colorable</a>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Screen readers and voiceover</h5>",
                    "target": [
                        "h5:nth-child(28)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.apple.com/voiceover/info/guide/_1131.html\">Voiceover commands and gestures</a> (Apple)</li>",
                    "target": [
                        "ul:nth-child(29) > li"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.apple.com/voiceover/info/guide/_1131.html\">Voiceover commands and gestures</a>",
                    "target": [
                        "ul:nth-child(29) > li > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Closed captioning and audio description resources</h5>",
                    "target": [
                        "h5:nth-child(30)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/\">Closed captioning FAQ</a> (WGBH)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/\">Closed captioning FAQ</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.acb.org/adp/ad.html#what\">All about Audio Description</a> (American Council of the Blind)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.acb.org/adp/ad.html#what\">All about Audio Description</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.nytimes.com/interactive/2014/01/16/opinion/16OpDoc-NotesOnBlindness.html\">Notes on Blindness</a> (NYT example)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.nytimes.com/interactive/2014/01/16/opinion/16OpDoc-NotesOnBlindness.html\">Notes on Blindness</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://webaim.org/techniques/captions/\">Captions, Transcripts, and Audio Descriptions</a> (WebAIM)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/techniques/captions/\">Captions, Transcripts, and Audio Descriptions</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/sugg-styles-conv-faq.html\">Suggested Styles and Conventions for Closed Captioning</a> (WGBH)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/sugg-styles-conv-faq.html\">Suggested Styles and Conventions for Closed Captioning</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.youtube.com/watch?v=JZlNVajYx9s&amp;feature=youtu.be&amp;t=3m43s\">Best practices for video description</a> (Rick Boggs)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.youtube.com/watch?v=JZlNVajYx9s&amp;feature=youtu.be&amp;t=3m43s\">Best practices for video description</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://g3ict.org/design/js/tinymce/filemanager/userfiles/File/Proceedings%20-%20PDFs/A_Larry_GoldbergNY.pdf\">A history of closed captioning</a> (Larry Goldberg)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(7)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://g3ict.org/design/js/tinymce/filemanager/userfiles/File/Proceedings%20-%20PDFs/A_Larry_GoldbergNY.pdf\">A history of closed captioning</a>",
                    "target": [
                        "li:nth-child(7) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Social media</h5>",
                    "target": [
                        "h5:nth-child(32)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.mediaaccess.org.au/web/social-media-for-people-with-a-disability\">Social media for people with a disability</a> (Media Access Australia)</li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.mediaaccess.org.au/web/social-media-for-people-with-a-disability\">Social media for people with a disability</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.digitalgov.gov/resources/improving-the-accessibility-of-social-media-in-government/\">Improving the Accessibility of Social Media in Government</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://hackpad.com/Federal-Social-Media-Accessibility-Toolkit-xWKKBxzGubh\">Federal Social Media Accessibility Toolkit Hackpad</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.3playmedia.com/how-it-works/how-to-guides/captions-subtitles-facebook-video/\">Captions and subtitles with Facebook video</a> (3Play Media)</li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.3playmedia.com/how-it-works/how-to-guides/captions-subtitles-facebook-video/\">Captions and subtitles with Facebook video</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://support.google.com/youtube/answer/2734796?hl=en\">Adding subtitles and closed captioning on Youtube</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://support.twitter.com/articles/20174660\">Adding alt text to images on Twitter</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Testing tools</h5>",
                    "target": [
                        "h5:nth-child(34)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\">Chrome Accessibility Developer Tools</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://addons.mozilla.org/en-US/firefox/addon/ainspector-sidebar/\">AInspector Sidebar</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(3) > a:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/\">aXe</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh\">WAVE</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.garcialo.com/tools/presentation/\">Pros and cons and info on the accessibility tools listed above</a> (Luis Garcia)</li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.garcialo.com/tools/presentation/\">Pros and cons and info on the accessibility tools listed above</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Resources/guidelines from other industries</h5>",
                    "target": [
                        "h5:nth-child(36)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.includification.com/\">Game Accessibility Guidelines</a>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://touchgraphics.com/\">Touch Graphics</a>",
                    "target": [
                        "a[href$=\"touchgraphics.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "10.0pt (13.28px)",
                                "fontWeight": "bold",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Interesting examples</h5>",
                    "target": [
                        "h5:nth-child(38)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a> (hit the tab button when you land on the page)</li>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a>",
                    "target": [
                        "a[href$=\"craighospital.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#444444",
                                "bgColor": "#ffffff",
                                "contrastRatio": 9.73,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 9.73"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://haltersweb.github.io/Accessibility/barchart.html\">Bar chart made with an HTML table</a> (Adina Halter)</li>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#27757b",
                                "bgColor": "#ffffff",
                                "contrastRatio": 5.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 5.36"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://haltersweb.github.io/Accessibility/barchart.html\">Bar chart made with an HTML table</a>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(2) > a"
                    ]
                }
            ]
        },
        {
            "id": "document-title",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag242",
                "TTv5",
                "TT12.a",
                "EN-301-549",
                "EN-9.2.4.2",
                "ACT"
            ],
            "description": "Ensure each HTML document contains a non-empty <title> element",
            "help": "Documents must have <title> element to aid in navigation",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/document-title?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "doc-has-title",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Document has a non-empty <title> element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<html lang=\"en\">",
                    "target": [
                        "html"
                    ]
                }
            ]
        },
        {
            "id": "empty-heading",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "best-practice"
            ],
            "description": "Ensure headings have discernible text",
            "help": "Headings should not be empty",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h1>Accessibility in Media: Tip Sheet &amp; Resources</h1>",
                    "target": [
                        "h1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>What is accessibility?</h4>",
                    "target": [
                        "h4:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>Why is accessibility important?</h4>",
                    "target": [
                        "h4:nth-child(8)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>What areas of journalism should be thinking about accessibility?</h4>",
                    "target": [
                        "h4:nth-child(14)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>Resources</h4>",
                    "target": [
                        "h4:nth-child(17)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Accessibility guidelines/resources from news organizations</h5>",
                    "target": [
                        "h5:nth-child(18)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Good reads</h5>",
                    "target": [
                        "h5:nth-child(20)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Web accessibility tutorials</h5>",
                    "target": [
                        "h5:nth-child(22)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Alt text guidelines</h5>",
                    "target": [
                        "h5:nth-child(24)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Colors and design</h5>",
                    "target": [
                        "h5:nth-child(26)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Screen readers and voiceover</h5>",
                    "target": [
                        "h5:nth-child(28)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Closed captioning and audio description resources</h5>",
                    "target": [
                        "h5:nth-child(30)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Social media</h5>",
                    "target": [
                        "h5:nth-child(32)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Testing tools</h5>",
                    "target": [
                        "h5:nth-child(34)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Resources/guidelines from other industries</h5>",
                    "target": [
                        "h5:nth-child(36)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Interesting examples</h5>",
                    "target": [
                        "h5:nth-child(38)"
                    ]
                }
            ]
        },
        {
            "id": "heading-order",
            "impact": "moderate",
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the order of headings is semantically correct",
            "help": "Heading levels should only increase by one",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/heading-order?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": {
                                "headingOrder": [
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h1:nth-child(1)"
                                        ],
                                        "level": 1
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h4:nth-child(4)"
                                        ],
                                        "level": 4
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h4:nth-child(8)"
                                        ],
                                        "level": 4
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h4:nth-child(14)"
                                        ],
                                        "level": 4
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h4:nth-child(17)"
                                        ],
                                        "level": 4
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(18)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(20)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(22)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(24)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(26)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(28)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(30)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(32)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(34)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(36)"
                                        ],
                                        "level": 5
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > div:nth-child(1) > h5:nth-child(38)"
                                        ],
                                        "level": 5
                                    }
                                ]
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h1>Accessibility in Media: Tip Sheet &amp; Resources</h1>",
                    "target": [
                        "h1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>Why is accessibility important?</h4>",
                    "target": [
                        "h4:nth-child(8)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>What areas of journalism should be thinking about accessibility?</h4>",
                    "target": [
                        "h4:nth-child(14)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>Resources</h4>",
                    "target": [
                        "h4:nth-child(17)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Accessibility guidelines/resources from news organizations</h5>",
                    "target": [
                        "h5:nth-child(18)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Good reads</h5>",
                    "target": [
                        "h5:nth-child(20)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Web accessibility tutorials</h5>",
                    "target": [
                        "h5:nth-child(22)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Alt text guidelines</h5>",
                    "target": [
                        "h5:nth-child(24)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Colors and design</h5>",
                    "target": [
                        "h5:nth-child(26)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Screen readers and voiceover</h5>",
                    "target": [
                        "h5:nth-child(28)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Closed captioning and audio description resources</h5>",
                    "target": [
                        "h5:nth-child(30)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Social media</h5>",
                    "target": [
                        "h5:nth-child(32)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Testing tools</h5>",
                    "target": [
                        "h5:nth-child(34)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Resources/guidelines from other industries</h5>",
                    "target": [
                        "h5:nth-child(36)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Interesting examples</h5>",
                    "target": [
                        "h5:nth-child(38)"
                    ]
                }
            ]
        },
        {
            "id": "html-has-lang",
            "impact": null,
            "tags": [
                "cat.language",
                "wcag2a",
                "wcag311",
                "TTv5",
                "TT11.a",
                "EN-301-549",
                "EN-9.3.1.1",
                "ACT"
            ],
            "description": "Ensure every HTML document has a lang attribute",
            "help": "<html> element must have a lang attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/html-has-lang?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "has-lang",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "The <html> element has a lang attribute"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<html lang=\"en\">",
                    "target": [
                        "html"
                    ]
                }
            ]
        },
        {
            "id": "html-lang-valid",
            "impact": null,
            "tags": [
                "cat.language",
                "wcag2a",
                "wcag311",
                "TTv5",
                "TT11.a",
                "EN-301-549",
                "EN-9.3.1.1",
                "ACT"
            ],
            "description": "Ensure the lang attribute of the <html> element has a valid value",
            "help": "<html> element must have a valid value for the lang attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/html-lang-valid?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "valid-lang",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Value of lang attribute is included in the list of valid languages"
                        }
                    ],
                    "impact": null,
                    "html": "<html lang=\"en\">",
                    "target": [
                        "html"
                    ]
                }
            ]
        },
        {
            "id": "image-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT7.a",
                "TT7.b",
                "EN-301-549",
                "EN-9.1.1.1",
                "ACT"
            ],
            "description": "Ensure <img> elements have alternative text or a role of none or presentation",
            "help": "Images must have alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/image-alt?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "has-alt",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Element has an alt attribute"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "alt-space-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Element has a valid alt attribute value"
                        }
                    ],
                    "impact": null,
                    "html": "<img src=\"http://i.dailymail.co.uk/i/pix/2011/04/14/article-0-0B9F190B00000578-48_468x343.jpg\" alt=\"A screengrab from a Verizon commercial showing a man checking his cell phone service from a street manhole.'\">",
                    "target": [
                        "img"
                    ]
                }
            ]
        },
        {
            "id": "image-redundant-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "best-practice"
            ],
            "description": "Ensure image alternative is not repeated as text",
            "help": "Alternative text of images should not be repeated as text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "duplicate-img-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element does not duplicate existing text in <img> alt text"
                        }
                    ],
                    "impact": null,
                    "html": "<img src=\"http://i.dailymail.co.uk/i/pix/2011/04/14/article-0-0B9F190B00000578-48_468x343.jpg\" alt=\"A screengrab from a Verizon commercial showing a man checking his cell phone service from a street manhole.'\">",
                    "target": [
                        "img"
                    ]
                }
            ]
        },
        {
            "id": "link-in-text-block",
            "impact": null,
            "tags": [
                "cat.color",
                "wcag2a",
                "wcag141",
                "TTv5",
                "TT13.a",
                "EN-301-549",
                "EN-9.1.4.1"
            ],
            "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
            "help": "Links must be distinguishable without relying on color",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/link-in-text-block?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<p>Join our email group to continue to chat, ask for help, share resources: <a href=\"https://groups.google.com/forum/#!forum/a11y-journalism/join\" target=\"_blank\">a11y-journalism@googlegroups.com</a></p>",
                                    "target": [
                                        "p:nth-child(2)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://groups.google.com/forum/#!forum/a11y-journalism/join\" target=\"_blank\">a11y-journalism@googlegroups.com</a>",
                    "target": [
                        "a[target=\"_blank\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<p>According to the <a href=\"http://www.bbc.co.uk/accessibility/best_practice/what_is.shtml\">BBC</a>, accessibility is used to describe \"whether a product (for example, a website, mobile site, digital TV interface or application) can be used by people of all abilities and disabilities.\"</p>",
                                    "target": [
                                        "p:nth-child(5)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.bbc.co.uk/accessibility/best_practice/what_is.shtml\">BBC</a>",
                    "target": [
                        "p:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<li>15 percent (or 37.5 million) American adults report having trouble hearing (<a href=\"http://www.rnib.org.uk/knowledge-and-research-hub/key-information-and-statistics\">NIDCD</a>)</li>",
                                    "target": [
                                        "#main-content > ul:nth-child(10) > li:nth-child(1)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.rnib.org.uk/knowledge-and-research-hub/key-information-and-statistics\">NIDCD</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<li>2.3 percent of Americans and 6.8 percent of Americans over 65 have a visual disability (<a href=\"https://nfb.org/blindness-statistics\">NFB</a>)</li>",
                                    "target": [
                                        "#main-content > ul:nth-child(10) > li:nth-child(2)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://nfb.org/blindness-statistics\">NFB</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<li><a href=\"http://www.colour-blindness.com/general/prevalence/\">7-10 percent</a> of males have red-green color blindness</li>",
                                    "target": [
                                        "#main-content > ul:nth-child(10) > li:nth-child(3)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.colour-blindness.com/general/prevalence/\">7-10 percent</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<p>And at the end of the day, even if you don't care about any of the above, depending on where you work and what you're doing, you could be <a href=\"http://webaim.org/articles/laws/usa/\">legally required</a> to care.</p>",
                                    "target": [
                                        "p:nth-child(13)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/articles/laws/usa/\">legally required</a>",
                    "target": [
                        "p:nth-child(13) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<li><a href=\"https://cfpb.github.io/design-manual/data-visualization/accessibility.html#alt-tags?cn=cmVwbHk%3D\">Alt text for charts</a> (Consumer Financial Protection Bureau)</li>",
                                    "target": [
                                        "ul:nth-child(25) > li:nth-child(2)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://cfpb.github.io/design-manual/data-visualization/accessibility.html#alt-tags?cn=cmVwbHk%3D\">Alt text for charts</a>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<li><a href=\"http://www.acb.org/adp/ad.html#what\">All about Audio Description</a> (American Council of the Blind)</li>",
                                    "target": [
                                        "ul:nth-child(31) > li:nth-child(2)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.acb.org/adp/ad.html#what\">All about Audio Description</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "link-in-text-block-style",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<li><a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a> (hit the tab button when you land on the page)</li>",
                                    "target": [
                                        "ul:nth-child(39) > li:nth-child(1)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Links can be distinguished from surrounding text by visual styling"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a>",
                    "target": [
                        "a[href$=\"craighospital.org/\"]"
                    ]
                }
            ]
        },
        {
            "id": "link-name",
            "impact": "serious",
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag244",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.2.4.4",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure links have discernible text",
            "help": "Links must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/link-name?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://groups.google.com/forum/#!forum/a11y-journalism/join\" target=\"_blank\">a11y-journalism@googlegroups.com</a>",
                    "target": [
                        "a[target=\"_blank\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"./bad-example.html\">Demo: Inaccessible example</a>",
                    "target": [
                        "a[href$=\"bad-example.html\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.bbc.co.uk/accessibility/best_practice/what_is.shtml\">BBC</a>",
                    "target": [
                        "p:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.rnib.org.uk/knowledge-and-research-hub/key-information-and-statistics\">NIDCD</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://nfb.org/blindness-statistics\">NFB</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.colour-blindness.com/general/prevalence/\">7-10 percent</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/articles/laws/usa/\">legally required</a>",
                    "target": [
                        "p:nth-child(13) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://www.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/\">SVG accessible</a>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.bbc.co.uk/guidelines/futuremedia/\">BBC</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://accessibility.voxmedia.com/\">Vox Product</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://yahooaccessibility.tumblr.com/\">Yahoo! Accessibility Lab</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://medium.com/@ablerism/beyond-alt-text-103b00eec89\">Beyond alt-text</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://knightlab.northwestern.edu/2016/06/13/a-bigger-tent-how-new-techniques-and-technology-can-help-journalists-reach-more-people/\">How new techniques and technology can help journalists reach more people</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://www.amazon.com/Design-Meets-Disability-MIT-Press/dp/0262516748\">Design Meets Disability</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/\">WebAIM</a>",
                    "target": [
                        "a[href$=\"webaim.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://teachaccess.github.io/tutorial/\">TeachAccess web accessibility tutorial</a>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://a11yproject.com/\">The A11Y Project</a>",
                    "target": [
                        "a[href$=\"a11yproject.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://pages.18f.gov/accessibility/\">18F Accessibility Guide</a>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/techniques/alttext/\">Alt text: guidelines and examples</a>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://cfpb.github.io/design-manual/data-visualization/accessibility.html#alt-tags?cn=cmVwbHk%3D\">Alt text for charts</a>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://michelf.ca/projects/sim-daltonism/\">Sim Daltonism</a>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://colorbrewer2.org/\">Colorbrewer</a>",
                    "target": [
                        "a[href$=\"colorbrewer2.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.checkmycolours.com/\">Check my Colours</a>",
                    "target": [
                        "a[href$=\"checkmycolours.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://jxnblk.com/colorable/demos/text/\">Colorable</a>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://www.apple.com/voiceover/info/guide/_1131.html\">Voiceover commands and gestures</a>",
                    "target": [
                        "ul:nth-child(29) > li > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/\">Closed captioning FAQ</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.acb.org/adp/ad.html#what\">All about Audio Description</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.nytimes.com/interactive/2014/01/16/opinion/16OpDoc-NotesOnBlindness.html\">Notes on Blindness</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/techniques/captions/\">Captions, Transcripts, and Audio Descriptions</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/sugg-styles-conv-faq.html\">Suggested Styles and Conventions for Closed Captioning</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://www.youtube.com/watch?v=JZlNVajYx9s&amp;feature=youtu.be&amp;t=3m43s\">Best practices for video description</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://g3ict.org/design/js/tinymce/filemanager/userfiles/File/Proceedings%20-%20PDFs/A_Larry_GoldbergNY.pdf\">A history of closed captioning</a>",
                    "target": [
                        "li:nth-child(7) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.mediaaccess.org.au/web/social-media-for-people-with-a-disability\">Social media for people with a disability</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://www.digitalgov.gov/resources/improving-the-accessibility-of-social-media-in-government/\">Improving the Accessibility of Social Media in Government</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://hackpad.com/Federal-Social-Media-Accessibility-Toolkit-xWKKBxzGubh\">Federal Social Media Accessibility Toolkit Hackpad</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.3playmedia.com/how-it-works/how-to-guides/captions-subtitles-facebook-video/\">Captions and subtitles with Facebook video</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://support.google.com/youtube/answer/2734796?hl=en\">Adding subtitles and closed captioning on Youtube</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://support.twitter.com/articles/20174660\">Adding alt text to images on Twitter</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\">Chrome Accessibility Developer Tools</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://addons.mozilla.org/en-US/firefox/addon/ainspector-sidebar/\">AInspector Sidebar</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(3) > a:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/\">aXe</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh\">WAVE</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.garcialo.com/tools/presentation/\">Pros and cons and info on the accessibility tools listed above</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://www.includification.com/\">Game Accessibility Guidelines</a>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://touchgraphics.com/\">Touch Graphics</a>",
                    "target": [
                        "a[href$=\"touchgraphics.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a>",
                    "target": [
                        "a[href$=\"craighospital.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is not in tab order or has accessible text"
                        }
                    ],
                    "impact": null,
                    "html": "<a href=\"http://haltersweb.github.io/Accessibility/barchart.html\">Bar chart made with an HTML table</a>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(2) > a"
                    ]
                }
            ]
        },
        {
            "id": "list",
            "impact": "serious",
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure that lists are structured correctly",
            "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/list?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(7)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "#main-content > ul:nth-child(10)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>\n\t\t\t\t\t<li>Are your links on descriptive words or phrases so that people on screen readers jumping between links know what each link goes to?</li>\n\t\t\t\t\t<li>Is your content free of jargon? Could your content benefit from being translated into another language?</li>\n\t\t\t\t</ul>",
                    "target": [
                        "ul:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(4)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>\n\t\t\t\t\t<li>How can you provide transcriptions or closed captioning on a quick turnaround?</li>\n\t\t\t\t\t<li>For which videos should we provide audio description?</li>\n\t\t\t\t</ul>",
                    "target": [
                        "ul:nth-child(6)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>\n\t\t\t\t\t<li>How do you make all of your social media content more accessible?</li>\n\t\t\t\t\t<li>How do you build in accessible ways for your readers to engage with you?</li>\n\t\t\t\t</ul>",
                    "target": [
                        "ul:nth-child(8)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(12)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>\n\t\t\t\t\t<li>Who are you using for your UX testing? Are you also experience testing?</li>\n\t\t\t\t\t<li>How can you make sure your testers reflect your audience? Are you missing anyone?</li>\n\t\t\t\t</ul>",
                    "target": [
                        "ul:nth-child(14)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>\n\t\t\t<li><a href=\"http://www.bbc.co.uk/guidelines/futuremedia/\">BBC</a></li>\n\t\t\t<li><a href=\"http://accessibility.voxmedia.com/\">Vox Product</a></li>\n\t\t\t<li><a href=\"https://yahooaccessibility.tumblr.com/\">Yahoo! Accessibility Lab</a></li>\n\t\t</ul>",
                    "target": [
                        "ul:nth-child(19)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(21)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(23)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(25)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(27)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>\n\t\t\t<li><a href=\"https://www.apple.com/voiceover/info/guide/_1131.html\">Voiceover commands and gestures</a> (Apple)</li>\n\t\t</ul>",
                    "target": [
                        "ul:nth-child(29)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(31)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(33)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List element only has direct children that are allowed inside <li> elements"
                        }
                    ],
                    "impact": null,
                    "html": "<ul>\n\t\t\t<li><a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a> (hit the tab button when you land on the page)</li>\n\t\t\t<li><a href=\"http://haltersweb.github.io/Accessibility/barchart.html\">Bar chart made with an HTML table</a> (Adina Halter)</li>\n\t\t</ul>",
                    "target": [
                        "ul:nth-child(39)"
                    ]
                }
            ]
        },
        {
            "id": "listitem",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure <li> elements are used semantically",
            "help": "<li> elements must be contained in a <ul> or <ol>",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/listitem?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Web: Could a screen reader read your website in a way that makes your content make sense?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Podcast/videos: Can someone who is hard of hearing, deaf or blind understand the content in your podcasts or videos? What about someone on a noisy train?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Language: Is your content easy to understand? How do you explain complex terms and jargon? Is your content in a language that your audience will understand?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Access: Can people find your content and get access to it from their location? How much does loading your website cost? How hard is it for someone to get access to your article?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Design: How easy is it for someone to navigate your site? Could a user with Parkinson's disease navigate through your mobile app? Is there enough contrast in your color choices? Is your font easy for dyslexic people to read?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>15 percent (or 37.5 million) American adults report having trouble hearing (<a href=\"http://www.rnib.org.uk/knowledge-and-research-hub/key-information-and-statistics\">NIDCD</a>)</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>2.3 percent of Americans and 6.8 percent of Americans over 65 have a visual disability (<a href=\"https://nfb.org/blindness-statistics\">NFB</a>)</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.colour-blindness.com/general/prevalence/\">7-10 percent</a> of males have red-green color blindness</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Content: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Are your links on descriptive words or phrases so that people on screen readers jumping between links know what each link goes to?</li>",
                    "target": [
                        "ul:nth-child(2) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is your content free of jargon? Could your content benefit from being translated into another language?</li>",
                    "target": [
                        "ul:nth-child(2) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Images and graphics: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>What should alt text include? How much alt text should you write?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is there enough contrast in your color palette? Is your color palette color-blind friendly? Is the font size big enough on all size screens?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>If the graphic is interactive, is there a clear way to interact with the graphic?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is your <a href=\"https://www.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/\">SVG accessible</a>?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Audio and video: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you provide transcriptions or closed captioning on a quick turnaround?</li>",
                    "target": [
                        "ul:nth-child(6) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>For which videos should we provide audio description?</li>",
                    "target": [
                        "ul:nth-child(6) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Social media/audience engagement: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(7)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you make all of your social media content more accessible?</li>",
                    "target": [
                        "ul:nth-child(8) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you build in accessible ways for your readers to engage with you?</li>",
                    "target": [
                        "ul:nth-child(8) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Product management:</li>",
                    "target": [
                        "li:nth-child(9)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>News doesn't stop for anyone. How can you build in accessibility into a quick turnaround design and development process?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you get institutional buy-in for accessibility?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Who is your audience, what needs are not being met and how do you reach an even larger audience?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Design/development:</li>",
                    "target": [
                        "li:nth-child(11)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Before launching new projects, are you going through accessibility checklists? Are you taking advantage of core HTML elements and ARIA?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you use \"visually hidden elements\" to guide a screen reader user through your page?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you help screen reader users navigate around ads? Around menus?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How long does it take for a page to load? How much would that cost a user?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>QA/Testing:</li>",
                    "target": [
                        "li:nth-child(13)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Who are you using for your UX testing? Are you also experience testing?</li>",
                    "target": [
                        "ul:nth-child(14) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you make sure your testers reflect your audience? Are you missing anyone?</li>",
                    "target": [
                        "ul:nth-child(14) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.bbc.co.uk/guidelines/futuremedia/\">BBC</a></li>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://accessibility.voxmedia.com/\">Vox Product</a></li>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://yahooaccessibility.tumblr.com/\">Yahoo! Accessibility Lab</a></li>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://medium.com/@ablerism/beyond-alt-text-103b00eec89\">Beyond alt-text</a> (Sara Hendren)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://knightlab.northwestern.edu/2016/06/13/a-bigger-tent-how-new-techniques-and-technology-can-help-journalists-reach-more-people/\">How new techniques and technology can help journalists reach more people</a> (Knight Lab)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.amazon.com/Design-Meets-Disability-MIT-Press/dp/0262516748\">Design Meets Disability</a> (Graham Pullin)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://webaim.org/\">WebAIM</a></li>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://teachaccess.github.io/tutorial/\">TeachAccess web accessibility tutorial</a></li>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://a11yproject.com/\">The A11Y Project</a></li>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://pages.18f.gov/accessibility/\">18F Accessibility Guide</a></li>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://webaim.org/techniques/alttext/\">Alt text: guidelines and examples</a> (WebAIM)</li>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://cfpb.github.io/design-manual/data-visualization/accessibility.html#alt-tags?cn=cmVwbHk%3D\">Alt text for charts</a> (Consumer Financial Protection Bureau)</li>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://michelf.ca/projects/sim-daltonism/\">Sim Daltonism</a></li>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://colorbrewer2.org/\">Colorbrewer</a></li>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.checkmycolours.com/\">Check my Colours</a></li>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://jxnblk.com/colorable/demos/text/\">Colorable</a></li>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.apple.com/voiceover/info/guide/_1131.html\">Voiceover commands and gestures</a> (Apple)</li>",
                    "target": [
                        "ul:nth-child(29) > li"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/\">Closed captioning FAQ</a> (WGBH)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.acb.org/adp/ad.html#what\">All about Audio Description</a> (American Council of the Blind)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.nytimes.com/interactive/2014/01/16/opinion/16OpDoc-NotesOnBlindness.html\">Notes on Blindness</a> (NYT example)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://webaim.org/techniques/captions/\">Captions, Transcripts, and Audio Descriptions</a> (WebAIM)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/sugg-styles-conv-faq.html\">Suggested Styles and Conventions for Closed Captioning</a> (WGBH)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.youtube.com/watch?v=JZlNVajYx9s&amp;feature=youtu.be&amp;t=3m43s\">Best practices for video description</a> (Rick Boggs)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://g3ict.org/design/js/tinymce/filemanager/userfiles/File/Proceedings%20-%20PDFs/A_Larry_GoldbergNY.pdf\">A history of closed captioning</a> (Larry Goldberg)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(7)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.mediaaccess.org.au/web/social-media-for-people-with-a-disability\">Social media for people with a disability</a> (Media Access Australia)</li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.digitalgov.gov/resources/improving-the-accessibility-of-social-media-in-government/\">Improving the Accessibility of Social Media in Government</a></li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://hackpad.com/Federal-Social-Media-Accessibility-Toolkit-xWKKBxzGubh\">Federal Social Media Accessibility Toolkit Hackpad</a></li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.3playmedia.com/how-it-works/how-to-guides/captions-subtitles-facebook-video/\">Captions and subtitles with Facebook video</a> (3Play Media)</li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://support.google.com/youtube/answer/2734796?hl=en\">Adding subtitles and closed captioning on Youtube</a></li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://support.twitter.com/articles/20174660\">Adding alt text to images on Twitter</a></li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\">Chrome Accessibility Developer Tools</a></li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\"></a><a href=\"https://addons.mozilla.org/en-US/firefox/addon/ainspector-sidebar/\">AInspector Sidebar</a></li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/\">aXe</a></li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh\">WAVE</a></li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.garcialo.com/tools/presentation/\">Pros and cons and info on the accessibility tools listed above</a> (Luis Garcia)</li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.includification.com/\">Game Accessibility Guidelines</a></li>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.includification.com/\"></a><a href=\"http://touchgraphics.com/\">Touch Graphics</a></li>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a> (hit the tab button when you land on the page)</li>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "listitem",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "List item has a <ul>, <ol> or role=\"list\" parent element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://haltersweb.github.io/Accessibility/barchart.html\">Bar chart made with an HTML table</a> (Adina Halter)</li>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(2)"
                    ]
                }
            ]
        },
        {
            "id": "meta-viewport-large",
            "impact": null,
            "tags": [
                "cat.sensory-and-visual-cues",
                "best-practice"
            ],
            "description": "Ensure <meta name=\"viewport\"> can scale a significant amount",
            "help": "Users should be able to zoom and scale the text up to 500%",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/meta-viewport-large?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "meta-viewport-large",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "<meta> tag does not prevent significant zooming on mobile devices"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">",
                    "target": [
                        "meta[name=\"viewport\"]"
                    ]
                }
            ]
        },
        {
            "id": "meta-viewport",
            "impact": null,
            "tags": [
                "cat.sensory-and-visual-cues",
                "wcag2aa",
                "wcag144",
                "EN-301-549",
                "EN-9.1.4.4",
                "ACT"
            ],
            "description": "Ensure <meta name=\"viewport\"> does not disable text scaling and zooming",
            "help": "Zooming and scaling must not be disabled",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/meta-viewport?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "meta-viewport",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "<meta> tag does not disable zooming on mobile devices"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">",
                    "target": [
                        "meta[name=\"viewport\"]"
                    ]
                }
            ]
        },
        {
            "id": "nested-interactive",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
            "help": "Interactive controls must not be nested",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/nested-interactive?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<img src=\"http://i.dailymail.co.uk/i/pix/2011/04/14/article-0-0B9F190B00000578-48_468x343.jpg\" alt=\"A screengrab from a Verizon commercial showing a man checking his cell phone service from a street manhole.'\">",
                    "target": [
                        "img"
                    ]
                }
            ]
        },
        {
            "id": "page-has-heading-one",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
            "help": "Page should contain a level-one heading",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/page-has-heading-one?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "page-has-heading-one",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<h1>Accessibility in Media: Tip Sheet &amp; Resources</h1>",
                                    "target": [
                                        "h1"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Page has at least one level-one heading"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<html lang=\"en\">",
                    "target": [
                        "html"
                    ]
                }
            ]
        },
        {
            "id": "region",
            "impact": "moderate",
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure all page content is contained by landmarks",
            "help": "All page content should be contained by landmarks",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/region?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h1>Accessibility in Media: Tip Sheet &amp; Resources</h1>",
                    "target": [
                        "h1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>Join our email group to continue to chat, ask for help, share resources: <a href=\"https://groups.google.com/forum/#!forum/a11y-journalism/join\" target=\"_blank\">a11y-journalism@googlegroups.com</a></p>",
                    "target": [
                        "p:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://groups.google.com/forum/#!forum/a11y-journalism/join\" target=\"_blank\">a11y-journalism@googlegroups.com</a>",
                    "target": [
                        "a[target=\"_blank\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p><a href=\"./bad-example.html\">Demo: Inaccessible example</a></p>",
                    "target": [
                        "p:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"./bad-example.html\">Demo: Inaccessible example</a>",
                    "target": [
                        "a[href$=\"bad-example.html\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>What is accessibility?</h4>",
                    "target": [
                        "h4:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>According to the <a href=\"http://www.bbc.co.uk/accessibility/best_practice/what_is.shtml\">BBC</a>, accessibility is used to describe \"whether a product (for example, a website, mobile site, digital TV interface or application) can be used by people of all abilities and disabilities.\"</p>",
                    "target": [
                        "p:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.bbc.co.uk/accessibility/best_practice/what_is.shtml\">BBC</a>",
                    "target": [
                        "p:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>For journalism in particular, accessibility issues could include any of the following:</p>",
                    "target": [
                        "p:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(7)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Web: Could a screen reader read your website in a way that makes your content make sense?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Podcast/videos: Can someone who is hard of hearing, deaf or blind understand the content in your podcasts or videos? What about someone on a noisy train?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Language: Is your content easy to understand? How do you explain complex terms and jargon? Is your content in a language that your audience will understand?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Access: Can people find your content and get access to it from their location? How much does loading your website cost? How hard is it for someone to get access to your article?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Design: How easy is it for someone to navigate your site? Could a user with Parkinson's disease navigate through your mobile app? Is there enough contrast in your color choices? Is your font easy for dyslexic people to read?</li>",
                    "target": [
                        "ul:nth-child(7) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>Why is accessibility important?</h4>",
                    "target": [
                        "h4:nth-child(8)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>If you don't care about it, a large group of people will never be able to access or experience the content you create. For example:\n\t\t</p>",
                    "target": [
                        "p:nth-child(9)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "#main-content > ul:nth-child(10)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>15 percent (or 37.5 million) American adults report having trouble hearing (<a href=\"http://www.rnib.org.uk/knowledge-and-research-hub/key-information-and-statistics\">NIDCD</a>)</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.rnib.org.uk/knowledge-and-research-hub/key-information-and-statistics\">NIDCD</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>2.3 percent of Americans and 6.8 percent of Americans over 65 have a visual disability (<a href=\"https://nfb.org/blindness-statistics\">NFB</a>)</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://nfb.org/blindness-statistics\">NFB</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.colour-blindness.com/general/prevalence/\">7-10 percent</a> of males have red-green color blindness</li>",
                    "target": [
                        "#main-content > ul:nth-child(10) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.colour-blindness.com/general/prevalence/\">7-10 percent</a>",
                    "target": [
                        "ul:nth-child(10) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>",
                    "target": [
                        "p:nth-child(11)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<img src=\"http://i.dailymail.co.uk/i/pix/2011/04/14/article-0-0B9F190B00000578-48_468x343.jpg\" alt=\"A screengrab from a Verizon commercial showing a man checking his cell phone service from a street manhole.'\">",
                    "target": [
                        "img"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>And at the end of the day, even if you don't care about any of the above, depending on where you work and what you're doing, you could be <a href=\"http://webaim.org/articles/laws/usa/\">legally required</a> to care.</p>",
                    "target": [
                        "p:nth-child(13)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/articles/laws/usa/\">legally required</a>",
                    "target": [
                        "p:nth-child(13) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>What areas of journalism should be thinking about accessibility?</h4>",
                    "target": [
                        "h4:nth-child(14)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p>The short answer is everyone! But more specifically, here are a few groups in particular and some prompts to get you thinking.</p>",
                    "target": [
                        "p:nth-child(15)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(16)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Content: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>\n\t\t\t\t\t<li>Are your links on descriptive words or phrases so that people on screen readers jumping between links know what each link goes to?</li>\n\t\t\t\t\t<li>Is your content free of jargon? Could your content benefit from being translated into another language?</li>\n\t\t\t\t</ul>",
                    "target": [
                        "ul:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Are your links on descriptive words or phrases so that people on screen readers jumping between links know what each link goes to?</li>",
                    "target": [
                        "ul:nth-child(2) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is your content free of jargon? Could your content benefit from being translated into another language?</li>",
                    "target": [
                        "ul:nth-child(2) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Images and graphics: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>What should alt text include? How much alt text should you write?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is there enough contrast in your color palette? Is your color palette color-blind friendly? Is the font size big enough on all size screens?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>If the graphic is interactive, is there a clear way to interact with the graphic?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Is your <a href=\"https://www.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/\">SVG accessible</a>?</li>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/\">SVG accessible</a>",
                    "target": [
                        "ul:nth-child(4) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Audio and video: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>\n\t\t\t\t\t<li>How can you provide transcriptions or closed captioning on a quick turnaround?</li>\n\t\t\t\t\t<li>For which videos should we provide audio description?</li>\n\t\t\t\t</ul>",
                    "target": [
                        "ul:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you provide transcriptions or closed captioning on a quick turnaround?</li>",
                    "target": [
                        "ul:nth-child(6) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>For which videos should we provide audio description?</li>",
                    "target": [
                        "ul:nth-child(6) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Social media/audience engagement: </li>",
                    "target": [
                        "ul:nth-child(16) > li:nth-child(7)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>\n\t\t\t\t\t<li>How do you make all of your social media content more accessible?</li>\n\t\t\t\t\t<li>How do you build in accessible ways for your readers to engage with you?</li>\n\t\t\t\t</ul>",
                    "target": [
                        "ul:nth-child(8)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you make all of your social media content more accessible?</li>",
                    "target": [
                        "ul:nth-child(8) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you build in accessible ways for your readers to engage with you?</li>",
                    "target": [
                        "ul:nth-child(8) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Product management:</li>",
                    "target": [
                        "li:nth-child(9)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>News doesn't stop for anyone. How can you build in accessibility into a quick turnaround design and development process?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How do you get institutional buy-in for accessibility?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Who is your audience, what needs are not being met and how do you reach an even larger audience?</li>",
                    "target": [
                        "ul:nth-child(16) > ul:nth-child(10) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Design/development:</li>",
                    "target": [
                        "li:nth-child(11)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(12)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Before launching new projects, are you going through accessibility checklists? Are you taking advantage of core HTML elements and ARIA?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you use \"visually hidden elements\" to guide a screen reader user through your page?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you help screen reader users navigate around ads? Around menus?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How long does it take for a page to load? How much would that cost a user?</li>",
                    "target": [
                        "ul:nth-child(12) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>QA/Testing:</li>",
                    "target": [
                        "li:nth-child(13)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>\n\t\t\t\t\t<li>Who are you using for your UX testing? Are you also experience testing?</li>\n\t\t\t\t\t<li>How can you make sure your testers reflect your audience? Are you missing anyone?</li>\n\t\t\t\t</ul>",
                    "target": [
                        "ul:nth-child(14)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>Who are you using for your UX testing? Are you also experience testing?</li>",
                    "target": [
                        "ul:nth-child(14) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li>How can you make sure your testers reflect your audience? Are you missing anyone?</li>",
                    "target": [
                        "ul:nth-child(14) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h4>Resources</h4>",
                    "target": [
                        "h4:nth-child(17)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Accessibility guidelines/resources from news organizations</h5>",
                    "target": [
                        "h5:nth-child(18)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>\n\t\t\t<li><a href=\"http://www.bbc.co.uk/guidelines/futuremedia/\">BBC</a></li>\n\t\t\t<li><a href=\"http://accessibility.voxmedia.com/\">Vox Product</a></li>\n\t\t\t<li><a href=\"https://yahooaccessibility.tumblr.com/\">Yahoo! Accessibility Lab</a></li>\n\t\t</ul>",
                    "target": [
                        "ul:nth-child(19)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.bbc.co.uk/guidelines/futuremedia/\">BBC</a></li>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.bbc.co.uk/guidelines/futuremedia/\">BBC</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://accessibility.voxmedia.com/\">Vox Product</a></li>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://accessibility.voxmedia.com/\">Vox Product</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://yahooaccessibility.tumblr.com/\">Yahoo! Accessibility Lab</a></li>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://yahooaccessibility.tumblr.com/\">Yahoo! Accessibility Lab</a>",
                    "target": [
                        "ul:nth-child(19) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Good reads</h5>",
                    "target": [
                        "h5:nth-child(20)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(21)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://medium.com/@ablerism/beyond-alt-text-103b00eec89\">Beyond alt-text</a> (Sara Hendren)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://medium.com/@ablerism/beyond-alt-text-103b00eec89\">Beyond alt-text</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://knightlab.northwestern.edu/2016/06/13/a-bigger-tent-how-new-techniques-and-technology-can-help-journalists-reach-more-people/\">How new techniques and technology can help journalists reach more people</a> (Knight Lab)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://knightlab.northwestern.edu/2016/06/13/a-bigger-tent-how-new-techniques-and-technology-can-help-journalists-reach-more-people/\">How new techniques and technology can help journalists reach more people</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.amazon.com/Design-Meets-Disability-MIT-Press/dp/0262516748\">Design Meets Disability</a> (Graham Pullin)</li>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.amazon.com/Design-Meets-Disability-MIT-Press/dp/0262516748\">Design Meets Disability</a>",
                    "target": [
                        "ul:nth-child(21) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Web accessibility tutorials</h5>",
                    "target": [
                        "h5:nth-child(22)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(23)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://webaim.org/\">WebAIM</a></li>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/\">WebAIM</a>",
                    "target": [
                        "a[href$=\"webaim.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://teachaccess.github.io/tutorial/\">TeachAccess web accessibility tutorial</a></li>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://teachaccess.github.io/tutorial/\">TeachAccess web accessibility tutorial</a>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://a11yproject.com/\">The A11Y Project</a></li>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://a11yproject.com/\">The A11Y Project</a>",
                    "target": [
                        "a[href$=\"a11yproject.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://pages.18f.gov/accessibility/\">18F Accessibility Guide</a></li>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://pages.18f.gov/accessibility/\">18F Accessibility Guide</a>",
                    "target": [
                        "ul:nth-child(23) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Alt text guidelines</h5>",
                    "target": [
                        "h5:nth-child(24)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(25)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://webaim.org/techniques/alttext/\">Alt text: guidelines and examples</a> (WebAIM)</li>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/techniques/alttext/\">Alt text: guidelines and examples</a>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://cfpb.github.io/design-manual/data-visualization/accessibility.html#alt-tags?cn=cmVwbHk%3D\">Alt text for charts</a> (Consumer Financial Protection Bureau)</li>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://cfpb.github.io/design-manual/data-visualization/accessibility.html#alt-tags?cn=cmVwbHk%3D\">Alt text for charts</a>",
                    "target": [
                        "ul:nth-child(25) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Colors and design</h5>",
                    "target": [
                        "h5:nth-child(26)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(27)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://michelf.ca/projects/sim-daltonism/\">Sim Daltonism</a></li>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://michelf.ca/projects/sim-daltonism/\">Sim Daltonism</a>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://colorbrewer2.org/\">Colorbrewer</a></li>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://colorbrewer2.org/\">Colorbrewer</a>",
                    "target": [
                        "a[href$=\"colorbrewer2.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.checkmycolours.com/\">Check my Colours</a></li>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.checkmycolours.com/\">Check my Colours</a>",
                    "target": [
                        "a[href$=\"checkmycolours.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://jxnblk.com/colorable/demos/text/\">Colorable</a></li>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://jxnblk.com/colorable/demos/text/\">Colorable</a>",
                    "target": [
                        "ul:nth-child(27) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Screen readers and voiceover</h5>",
                    "target": [
                        "h5:nth-child(28)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>\n\t\t\t<li><a href=\"https://www.apple.com/voiceover/info/guide/_1131.html\">Voiceover commands and gestures</a> (Apple)</li>\n\t\t</ul>",
                    "target": [
                        "ul:nth-child(29)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.apple.com/voiceover/info/guide/_1131.html\">Voiceover commands and gestures</a> (Apple)</li>",
                    "target": [
                        "ul:nth-child(29) > li"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.apple.com/voiceover/info/guide/_1131.html\">Voiceover commands and gestures</a>",
                    "target": [
                        "ul:nth-child(29) > li > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Closed captioning and audio description resources</h5>",
                    "target": [
                        "h5:nth-child(30)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(31)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/\">Closed captioning FAQ</a> (WGBH)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/\">Closed captioning FAQ</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.acb.org/adp/ad.html#what\">All about Audio Description</a> (American Council of the Blind)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.acb.org/adp/ad.html#what\">All about Audio Description</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.nytimes.com/interactive/2014/01/16/opinion/16OpDoc-NotesOnBlindness.html\">Notes on Blindness</a> (NYT example)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.nytimes.com/interactive/2014/01/16/opinion/16OpDoc-NotesOnBlindness.html\">Notes on Blindness</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://webaim.org/techniques/captions/\">Captions, Transcripts, and Audio Descriptions</a> (WebAIM)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://webaim.org/techniques/captions/\">Captions, Transcripts, and Audio Descriptions</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/sugg-styles-conv-faq.html\">Suggested Styles and Conventions for Closed Captioning</a> (WGBH)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://main.wgbh.org/wgbh/pages/mag/services/captioning/faq/sugg-styles-conv-faq.html\">Suggested Styles and Conventions for Closed Captioning</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.youtube.com/watch?v=JZlNVajYx9s&amp;feature=youtu.be&amp;t=3m43s\">Best practices for video description</a> (Rick Boggs)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.youtube.com/watch?v=JZlNVajYx9s&amp;feature=youtu.be&amp;t=3m43s\">Best practices for video description</a>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://g3ict.org/design/js/tinymce/filemanager/userfiles/File/Proceedings%20-%20PDFs/A_Larry_GoldbergNY.pdf\">A history of closed captioning</a> (Larry Goldberg)</li>",
                    "target": [
                        "ul:nth-child(31) > li:nth-child(7)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://g3ict.org/design/js/tinymce/filemanager/userfiles/File/Proceedings%20-%20PDFs/A_Larry_GoldbergNY.pdf\">A history of closed captioning</a>",
                    "target": [
                        "li:nth-child(7) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Social media</h5>",
                    "target": [
                        "h5:nth-child(32)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(33)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.mediaaccess.org.au/web/social-media-for-people-with-a-disability\">Social media for people with a disability</a> (Media Access Australia)</li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.mediaaccess.org.au/web/social-media-for-people-with-a-disability\">Social media for people with a disability</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://www.digitalgov.gov/resources/improving-the-accessibility-of-social-media-in-government/\">Improving the Accessibility of Social Media in Government</a></li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://www.digitalgov.gov/resources/improving-the-accessibility-of-social-media-in-government/\">Improving the Accessibility of Social Media in Government</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(2) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://hackpad.com/Federal-Social-Media-Accessibility-Toolkit-xWKKBxzGubh\">Federal Social Media Accessibility Toolkit Hackpad</a></li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://hackpad.com/Federal-Social-Media-Accessibility-Toolkit-xWKKBxzGubh\">Federal Social Media Accessibility Toolkit Hackpad</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(3) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.3playmedia.com/how-it-works/how-to-guides/captions-subtitles-facebook-video/\">Captions and subtitles with Facebook video</a> (3Play Media)</li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.3playmedia.com/how-it-works/how-to-guides/captions-subtitles-facebook-video/\">Captions and subtitles with Facebook video</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://support.google.com/youtube/answer/2734796?hl=en\">Adding subtitles and closed captioning on Youtube</a></li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://support.google.com/youtube/answer/2734796?hl=en\">Adding subtitles and closed captioning on Youtube</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://support.twitter.com/articles/20174660\">Adding alt text to images on Twitter</a></li>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://support.twitter.com/articles/20174660\">Adding alt text to images on Twitter</a>",
                    "target": [
                        "ul:nth-child(33) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Testing tools</h5>",
                    "target": [
                        "h5:nth-child(34)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(35)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\">Chrome Accessibility Developer Tools</a></li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\">Chrome Accessibility Developer Tools</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\">\n\t\t\t</a>",
                    "target": [
                        "ul:nth-child(35) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\"></a><a href=\"https://addons.mozilla.org/en-US/firefox/addon/ainspector-sidebar/\">AInspector Sidebar</a></li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\"></a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(3) > a:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://addons.mozilla.org/en-US/firefox/addon/ainspector-sidebar/\">AInspector Sidebar</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(3) > a:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/\">aXe</a></li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/\">aXe</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(4) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh\">WAVE</a></li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh\">WAVE</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(5) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.garcialo.com/tools/presentation/\">Pros and cons and info on the accessibility tools listed above</a> (Luis Garcia)</li>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.garcialo.com/tools/presentation/\">Pros and cons and info on the accessibility tools listed above</a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(6) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Resources/guidelines from other industries</h5>",
                    "target": [
                        "h5:nth-child(36)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>\n\t\t\t<li><a href=\"http://www.includification.com/\">Game Accessibility Guidelines</a></li><a href=\"http://www.includification.com/\">\n\t\t\t</a><li><a href=\"http://www.includification.com/\"></a><a href=\"http://touchgraphics.com/\">Touch Graphics</a></li>\n\t\t</ul>",
                    "target": [
                        "ul:nth-child(37)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.includification.com/\">Game Accessibility Guidelines</a></li>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.includification.com/\">Game Accessibility Guidelines</a>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(1) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.includification.com/\">\n\t\t\t</a>",
                    "target": [
                        "ul:nth-child(37) > a"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://www.includification.com/\"></a><a href=\"http://touchgraphics.com/\">Touch Graphics</a></li>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://www.includification.com/\"></a>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(3) > a:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://touchgraphics.com/\">Touch Graphics</a>",
                    "target": [
                        "a[href$=\"touchgraphics.com/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5>Interesting examples</h5>",
                    "target": [
                        "h5:nth-child(38)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<ul>\n\t\t\t<li><a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a> (hit the tab button when you land on the page)</li>\n\t\t\t<li><a href=\"http://haltersweb.github.io/Accessibility/barchart.html\">Bar chart made with an HTML table</a> (Adina Halter)</li>\n\t\t</ul>",
                    "target": [
                        "ul:nth-child(39)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a> (hit the tab button when you land on the page)</li>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"https://craighospital.org/\">Craig Hospital accessibility menu</a>",
                    "target": [
                        "a[href$=\"craighospital.org/\"]"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<li><a href=\"http://haltersweb.github.io/Accessibility/barchart.html\">Bar chart made with an HTML table</a> (Adina Halter)</li>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "All page content is contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a href=\"http://haltersweb.github.io/Accessibility/barchart.html\">Bar chart made with an HTML table</a>",
                    "target": [
                        "ul:nth-child(39) > li:nth-child(2) > a"
                    ]
                }
            ]
        }
    ],
    violations: [
        {
            "id": "heading-order",
            "impact": "moderate",
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the order of headings is semantically correct",
            "help": "Heading levels should only increase by one",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/heading-order?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order invalid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "moderate",
                    "html": "<h4>What is accessibility?</h4>",
                    "target": [
                        "h4:nth-child(4)"
                    ],
                    "failureSummary": "Fix any of the following:\n  Heading order invalid"
                }
            ]
        },
        {
            "id": "landmark-one-main",
            "impact": "moderate",
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the document has a main landmark",
            "help": "Document should have one main landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "page-has-main",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Document does not have a main landmark"
                        }
                    ],
                    "none": [],
                    "impact": "moderate",
                    "html": "<html lang=\"en\">",
                    "target": [
                        "html"
                    ],
                    "failureSummary": "Fix all of the following:\n  Document does not have a main landmark"
                }
            ]
        },
        {
            "id": "link-name",
            "impact": "serious",
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag244",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.2.4.4",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure links have discernible text",
            "help": "Links must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/link-name?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have text that is visible to screen readers"
                        },
                        {
                            "id": "aria-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "aria-label attribute does not exist or is empty"
                        },
                        {
                            "id": "aria-labelledby",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
                        },
                        {
                            "id": "non-empty-title",
                            "data": {
                                "messageKey": "noAttr"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has no title attribute"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is in tab order and does not have accessible text"
                        }
                    ],
                    "impact": "serious",
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\">\n\t\t\t</a>",
                    "target": [
                        "ul:nth-child(35) > a"
                    ],
                    "failureSummary": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have text that is visible to screen readers"
                        },
                        {
                            "id": "aria-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "aria-label attribute does not exist or is empty"
                        },
                        {
                            "id": "aria-labelledby",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
                        },
                        {
                            "id": "non-empty-title",
                            "data": {
                                "messageKey": "noAttr"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has no title attribute"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is in tab order and does not have accessible text"
                        }
                    ],
                    "impact": "serious",
                    "html": "<a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\"></a>",
                    "target": [
                        "ul:nth-child(35) > li:nth-child(3) > a:nth-child(1)"
                    ],
                    "failureSummary": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have text that is visible to screen readers"
                        },
                        {
                            "id": "aria-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "aria-label attribute does not exist or is empty"
                        },
                        {
                            "id": "aria-labelledby",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
                        },
                        {
                            "id": "non-empty-title",
                            "data": {
                                "messageKey": "noAttr"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has no title attribute"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is in tab order and does not have accessible text"
                        }
                    ],
                    "impact": "serious",
                    "html": "<a href=\"http://www.includification.com/\">\n\t\t\t</a>",
                    "target": [
                        "ul:nth-child(37) > a"
                    ],
                    "failureSummary": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have text that is visible to screen readers"
                        },
                        {
                            "id": "aria-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "aria-label attribute does not exist or is empty"
                        },
                        {
                            "id": "aria-labelledby",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
                        },
                        {
                            "id": "non-empty-title",
                            "data": {
                                "messageKey": "noAttr"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has no title attribute"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "focusable-no-name",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element is in tab order and does not have accessible text"
                        }
                    ],
                    "impact": "serious",
                    "html": "<a href=\"http://www.includification.com/\"></a>",
                    "target": [
                        "ul:nth-child(37) > li:nth-child(3) > a:nth-child(1)"
                    ],
                    "failureSummary": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
                }
            ]
        },
        {
            "id": "list",
            "impact": "serious",
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure that lists are structured correctly",
            "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/list?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": {
                                "values": "ul"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<ul>\n\t\t\t\t\t<li>Are your links on descriptive words or phrases so that people on screen readers jumping between links know what each link goes to?</li>\n\t\t\t\t\t<li>Is your content free of jargon? Could your content benefit from being translated into another language?</li>\n\t\t\t\t</ul>",
                                    "target": [
                                        "ul:nth-child(2)"
                                    ]
                                },
                                {
                                    "html": "<ul>",
                                    "target": [
                                        "ul:nth-child(4)"
                                    ]
                                },
                                {
                                    "html": "<ul>\n\t\t\t\t\t<li>How can you provide transcriptions or closed captioning on a quick turnaround?</li>\n\t\t\t\t\t<li>For which videos should we provide audio description?</li>\n\t\t\t\t</ul>",
                                    "target": [
                                        "ul:nth-child(6)"
                                    ]
                                },
                                {
                                    "html": "<ul>\n\t\t\t\t\t<li>How do you make all of your social media content more accessible?</li>\n\t\t\t\t\t<li>How do you build in accessible ways for your readers to engage with you?</li>\n\t\t\t\t</ul>",
                                    "target": [
                                        "ul:nth-child(8)"
                                    ]
                                },
                                {
                                    "html": "<ul>",
                                    "target": [
                                        "ul:nth-child(16) > ul:nth-child(10)"
                                    ]
                                },
                                {
                                    "html": "<ul>",
                                    "target": [
                                        "ul:nth-child(12)"
                                    ]
                                },
                                {
                                    "html": "<ul>\n\t\t\t\t\t<li>Who are you using for your UX testing? Are you also experience testing?</li>\n\t\t\t\t\t<li>How can you make sure your testers reflect your audience? Are you missing anyone?</li>\n\t\t\t\t</ul>",
                                    "target": [
                                        "ul:nth-child(14)"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "List element has direct children that are not allowed: ul"
                        }
                    ],
                    "impact": "serious",
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(16)"
                    ],
                    "failureSummary": "Fix all of the following:\n  List element has direct children that are not allowed: ul"
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": {
                                "values": "a"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<a href=\"https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en\">\n\t\t\t</a>",
                                    "target": [
                                        "ul:nth-child(35) > a"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "List element has direct children that are not allowed: a"
                        }
                    ],
                    "impact": "serious",
                    "html": "<ul>",
                    "target": [
                        "ul:nth-child(35)"
                    ],
                    "failureSummary": "Fix all of the following:\n  List element has direct children that are not allowed: a"
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "only-listitems",
                            "data": {
                                "values": "a"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<a href=\"http://www.includification.com/\">\n\t\t\t</a>",
                                    "target": [
                                        "ul:nth-child(37) > a"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "List element has direct children that are not allowed: a"
                        }
                    ],
                    "impact": "serious",
                    "html": "<ul>\n\t\t\t<li><a href=\"http://www.includification.com/\">Game Accessibility Guidelines</a></li><a href=\"http://www.includification.com/\">\n\t\t\t</a><li><a href=\"http://www.includification.com/\"></a><a href=\"http://touchgraphics.com/\">Touch Graphics</a></li>\n\t\t</ul>",
                    "target": [
                        "ul:nth-child(37)"
                    ],
                    "failureSummary": "Fix all of the following:\n  List element has direct children that are not allowed: a"
                }
            ]
        },
        {
            "id": "region",
            "impact": "moderate",
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure all page content is contained by landmarks",
            "help": "All page content should be contained by landmarks",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/region?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "region",
                            "data": {
                                "isIframe": false
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Some page content is not contained by landmarks"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "moderate",
                    "html": "<div id=\"main-content\">",
                    "target": [
                        "#main-content"
                    ],
                    "failureSummary": "Fix any of the following:\n  Some page content is not contained by landmarks"
                }
            ]
        }
    ],
    inapplicable: [
        {
            "id": "accesskeys",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure every accesskey attribute value is unique",
            "help": "accesskey attribute value should be unique",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/accesskeys?application=axeAPI",
            "nodes": []
        },
        {
            "id": "area-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag244",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.2.4.4",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure <area> elements of image maps have alternative text",
            "help": "Active <area> elements must have alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/area-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-allowed-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure an element's role supports its ARIA attributes",
            "help": "Elements must only use supported ARIA attributes",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-allowed-role",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice"
            ],
            "description": "Ensure role attribute has an appropriate value for the element",
            "help": "ARIA role should be appropriate for the element",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-braille-equivalent",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
            "help": "aria-braille attributes must have a non-braille equivalent",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-braille-equivalent?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-command-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure every ARIA button, link and menuitem has an accessible name",
            "help": "ARIA commands must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-command-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-conditional-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure ARIA attributes are used as described in the specification of the element's role",
            "help": "ARIA attributes must be used as specified for the element's role",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-conditional-attr?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-deprecated-role",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure elements do not use deprecated roles",
            "help": "Deprecated ARIA roles must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-deprecated-role?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-dialog-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice"
            ],
            "description": "Ensure every ARIA dialog and alertdialog node has an accessible name",
            "help": "ARIA dialog and alertdialog nodes should have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-hidden-focus",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
            "help": "ARIA hidden element must not be focusable or contain focusable elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-hidden-focus?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-input-field-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure every ARIA input field has an accessible name",
            "help": "ARIA input fields must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-input-field-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-meter-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag111",
                "EN-301-549",
                "EN-9.1.1.1"
            ],
            "description": "Ensure every ARIA meter node has an accessible name",
            "help": "ARIA meter nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-meter-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-progressbar-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag111",
                "EN-301-549",
                "EN-9.1.1.1"
            ],
            "description": "Ensure every ARIA progressbar node has an accessible name",
            "help": "ARIA progressbar nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-prohibited-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure ARIA attributes are not prohibited for an element's role",
            "help": "Elements must only use permitted ARIA attributes",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-required-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure elements with ARIA roles have all required ARIA attributes",
            "help": "Required ARIA attributes must be provided",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-required-attr?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-required-children",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure elements with an ARIA role that require child roles contain them",
            "help": "Certain ARIA roles must contain particular children",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-required-parent",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure elements with an ARIA role that require parent roles are contained by them",
            "help": "Certain ARIA roles must be contained by particular parents",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-required-parent?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-roles",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure all elements with a role attribute use a valid value",
            "help": "ARIA roles used must conform to valid values",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-roles?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-text",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice"
            ],
            "description": "Ensure role=\"text\" is used on elements with no focusable descendants",
            "help": "\"role=text\" should have no focusable descendants",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-text?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-toggle-field-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure every ARIA toggle field has an accessible name",
            "help": "ARIA toggle fields must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-toggle-field-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-tooltip-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure every ARIA tooltip node has an accessible name",
            "help": "ARIA tooltip nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-tooltip-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-treeitem-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice"
            ],
            "description": "Ensure every ARIA treeitem node has an accessible name",
            "help": "ARIA treeitem nodes should have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-treeitem-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-valid-attr-value",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure all ARIA attributes have valid values",
            "help": "ARIA attributes must conform to valid values",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-valid-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure attributes that begin with aria- are valid ARIA attributes",
            "help": "ARIA attributes must conform to valid names",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr?application=axeAPI",
            "nodes": []
        },
        {
            "id": "autocomplete-valid",
            "impact": null,
            "tags": [
                "cat.forms",
                "wcag21aa",
                "wcag135",
                "EN-301-549",
                "EN-9.1.3.5",
                "ACT"
            ],
            "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
            "help": "autocomplete attribute must be used correctly",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/autocomplete-valid?application=axeAPI",
            "nodes": []
        },
        {
            "id": "avoid-inline-spacing",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag21aa",
                "wcag1412",
                "EN-301-549",
                "EN-9.1.4.12",
                "ACT"
            ],
            "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
            "help": "Inline text spacing must be adjustable with custom stylesheets",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/avoid-inline-spacing?application=axeAPI",
            "nodes": []
        },
        {
            "id": "blink",
            "impact": null,
            "tags": [
                "cat.time-and-media",
                "wcag2a",
                "wcag222",
                "section508",
                "section508.22.j",
                "TTv5",
                "TT2.b",
                "EN-301-549",
                "EN-9.2.2.2"
            ],
            "description": "Ensure <blink> elements are not used",
            "help": "<blink> elements are deprecated and must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/blink?application=axeAPI",
            "nodes": []
        },
        {
            "id": "button-name",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure buttons have discernible text",
            "help": "Buttons must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/button-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "definition-list",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure <dl> elements are structured correctly",
            "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/definition-list?application=axeAPI",
            "nodes": []
        },
        {
            "id": "dlitem",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure <dt> and <dd> elements are contained by a <dl>",
            "help": "<dt> and <dd> elements must be contained by a <dl>",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/dlitem?application=axeAPI",
            "nodes": []
        },
        {
            "id": "duplicate-id-aria",
            "impact": null,
            "tags": [
                "cat.parsing",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure every id attribute value used in ARIA and in labels is unique",
            "help": "IDs used in ARIA and labels must be unique",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/duplicate-id-aria?application=axeAPI",
            "nodes": []
        },
        {
            "id": "empty-table-header",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "best-practice"
            ],
            "description": "Ensure table headers have discernible text",
            "help": "Table header text should not be empty",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/empty-table-header?application=axeAPI",
            "nodes": []
        },
        {
            "id": "form-field-multiple-labels",
            "impact": null,
            "tags": [
                "cat.forms",
                "wcag2a",
                "wcag332",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.3.3.2"
            ],
            "description": "Ensure form field does not have multiple label elements",
            "help": "Form field must not have multiple label elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/form-field-multiple-labels?application=axeAPI",
            "nodes": []
        },
        {
            "id": "frame-focusable-content",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "wcag2a",
                "wcag211",
                "TTv5",
                "TT4.a",
                "EN-301-549",
                "EN-9.2.1.1"
            ],
            "description": "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",
            "help": "Frames with focusable content must not have tabindex=-1",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/frame-focusable-content?application=axeAPI",
            "nodes": []
        },
        {
            "id": "frame-tested",
            "impact": null,
            "tags": [
                "cat.structure",
                "best-practice",
                "review-item"
            ],
            "description": "Ensure <iframe> and <frame> elements contain the axe-core script",
            "help": "Frames should be tested with axe-core",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/frame-tested?application=axeAPI",
            "nodes": []
        },
        {
            "id": "frame-title-unique",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT12.d",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure <iframe> and <frame> elements contain a unique title attribute",
            "help": "Frames must have a unique title attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/frame-title-unique?application=axeAPI",
            "nodes": []
        },
        {
            "id": "frame-title",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.i",
                "TTv5",
                "TT12.d",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure <iframe> and <frame> elements have an accessible name",
            "help": "Frames must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/frame-title?application=axeAPI",
            "nodes": []
        },
        {
            "id": "html-xml-lang-mismatch",
            "impact": null,
            "tags": [
                "cat.language",
                "wcag2a",
                "wcag311",
                "EN-301-549",
                "EN-9.3.1.1",
                "ACT"
            ],
            "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
            "help": "HTML elements with lang and xml:lang must have the same base language",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/html-xml-lang-mismatch?application=axeAPI",
            "nodes": []
        },
        {
            "id": "input-button-name",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure input buttons have discernible text",
            "help": "Input buttons must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/input-button-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "input-image-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT7.a",
                "EN-301-549",
                "EN-9.1.1.1",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure <input type=\"image\"> elements have alternative text",
            "help": "Image buttons must have alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/input-image-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "label-title-only",
            "impact": null,
            "tags": [
                "cat.forms",
                "best-practice"
            ],
            "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
            "help": "Form elements should have a visible label",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/label-title-only?application=axeAPI",
            "nodes": []
        },
        {
            "id": "label",
            "impact": null,
            "tags": [
                "cat.forms",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.n",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure every form element has a label",
            "help": "Form elements must have labels",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/label?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-banner-is-top-level",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the banner landmark is at top level",
            "help": "Banner landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-banner-is-top-level?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-complementary-is-top-level",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the complementary landmark or aside is at top level",
            "help": "Aside should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-complementary-is-top-level?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-contentinfo-is-top-level",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the contentinfo landmark is at top level",
            "help": "Contentinfo landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-contentinfo-is-top-level?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-main-is-top-level",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the main landmark is at top level",
            "help": "Main landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-no-duplicate-banner",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the document has at most one banner landmark",
            "help": "Document should not have more than one banner landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-no-duplicate-contentinfo",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the document has at most one contentinfo landmark",
            "help": "Document should not have more than one contentinfo landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-contentinfo?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-no-duplicate-main",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the document has at most one main landmark",
            "help": "Document should not have more than one main landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-main?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-unique",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure landmarks are unique",
            "help": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=axeAPI",
            "nodes": []
        },
        {
            "id": "marquee",
            "impact": null,
            "tags": [
                "cat.parsing",
                "wcag2a",
                "wcag222",
                "TTv5",
                "TT2.b",
                "EN-301-549",
                "EN-9.2.2.2"
            ],
            "description": "Ensure <marquee> elements are not used",
            "help": "<marquee> elements are deprecated and must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/marquee?application=axeAPI",
            "nodes": []
        },
        {
            "id": "meta-refresh",
            "impact": null,
            "tags": [
                "cat.time-and-media",
                "wcag2a",
                "wcag221",
                "TTv5",
                "TT8.a",
                "EN-301-549",
                "EN-9.2.2.1"
            ],
            "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
            "help": "Delayed refresh under 20 hours must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/meta-refresh?application=axeAPI",
            "nodes": []
        },
        {
            "id": "object-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a",
                "EN-301-549",
                "EN-9.1.1.1"
            ],
            "description": "Ensure <object> elements have alternative text",
            "help": "<object> elements must have alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/object-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "presentation-role-conflict",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice",
                "ACT"
            ],
            "description": "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
            "help": "Ensure elements marked as presentational are consistently ignored",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/presentation-role-conflict?application=axeAPI",
            "nodes": []
        },
        {
            "id": "role-img-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT7.a",
                "EN-301-549",
                "EN-9.1.1.1",
                "ACT"
            ],
            "description": "Ensure [role=\"img\"] elements have alternative text",
            "help": "[role=\"img\"] elements must have an alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/role-img-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "scope-attr-valid",
            "impact": null,
            "tags": [
                "cat.tables",
                "best-practice"
            ],
            "description": "Ensure the scope attribute is used correctly on tables",
            "help": "scope attribute should be used correctly",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/scope-attr-valid?application=axeAPI",
            "nodes": []
        },
        {
            "id": "scrollable-region-focusable",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "wcag2a",
                "wcag211",
                "wcag213",
                "TTv5",
                "TT4.a",
                "EN-301-549",
                "EN-9.2.1.1",
                "EN-9.2.1.3"
            ],
            "description": "Ensure elements that have scrollable content are accessible by keyboard",
            "help": "Scrollable region must have keyboard access",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/scrollable-region-focusable?application=axeAPI",
            "nodes": []
        },
        {
            "id": "select-name",
            "impact": null,
            "tags": [
                "cat.forms",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.n",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure select element has an accessible name",
            "help": "Select element must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/select-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "server-side-image-map",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag211",
                "section508",
                "section508.22.f",
                "TTv5",
                "TT4.a",
                "EN-301-549",
                "EN-9.2.1.1"
            ],
            "description": "Ensure that server-side image maps are not used",
            "help": "Server-side image maps must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/server-side-image-map?application=axeAPI",
            "nodes": []
        },
        {
            "id": "skip-link",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure all skip links have a focusable target",
            "help": "The skip-link target should exist and be focusable",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/skip-link?application=axeAPI",
            "nodes": []
        },
        {
            "id": "summary-name",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure summary elements have discernible text",
            "help": "Summary elements must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/summary-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "svg-img-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT7.a",
                "EN-301-549",
                "EN-9.1.1.1",
                "ACT"
            ],
            "description": "Ensure <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
            "help": "<svg> elements with an img role must have an alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/svg-img-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "tabindex",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure tabindex attribute values are not greater than 0",
            "help": "Elements should not have tabindex greater than zero",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/tabindex?application=axeAPI",
            "nodes": []
        },
        {
            "id": "table-duplicate-name",
            "impact": null,
            "tags": [
                "cat.tables",
                "best-practice"
            ],
            "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
            "help": "Tables should not have the same summary and caption",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/table-duplicate-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "td-headers-attr",
            "impact": null,
            "tags": [
                "cat.tables",
                "wcag2a",
                "wcag131",
                "section508",
                "section508.22.g",
                "TTv5",
                "TT14.b",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",
            "help": "Table cells that use the headers attribute must only refer to cells in the same table",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/td-headers-attr?application=axeAPI",
            "nodes": []
        },
        {
            "id": "th-has-data-cells",
            "impact": null,
            "tags": [
                "cat.tables",
                "wcag2a",
                "wcag131",
                "section508",
                "section508.22.g",
                "TTv5",
                "TT14.b",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
            "help": "Table headers in a data table must refer to data cells",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/th-has-data-cells?application=axeAPI",
            "nodes": []
        },
        {
            "id": "valid-lang",
            "impact": null,
            "tags": [
                "cat.language",
                "wcag2aa",
                "wcag312",
                "TTv5",
                "TT11.b",
                "EN-301-549",
                "EN-9.3.1.2",
                "ACT"
            ],
            "description": "Ensure lang attributes have valid values",
            "help": "lang attribute must have a valid value",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/valid-lang?application=axeAPI",
            "nodes": []
        },
        {
            "id": "video-caption",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag122",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT17.a",
                "EN-301-549",
                "EN-9.1.2.2"
            ],
            "description": "Ensure <video> elements have captions",
            "help": "<video> elements must have captions",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/video-caption?application=axeAPI",
            "nodes": []
        },
        {
            "id": "no-autoplay-audio",
            "impact": null,
            "tags": [
                "cat.time-and-media",
                "wcag2a",
                "wcag142",
                "TTv5",
                "TT2.a",
                "EN-301-549",
                "EN-9.1.4.2",
                "ACT"
            ],
            "description": "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
            "help": "<video> or <audio> elements must not play automatically",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/no-autoplay-audio?application=axeAPI",
            "nodes": []
        }
    ],
    incomplete: []
}