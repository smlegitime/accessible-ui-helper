/**
 * @fileoverview Defines the Tag interface and arrays of recommended and optional accessibility tags.
 * The `Tag` interface represents the structure of an accessibility standard tag, including its name, ID, type, description, and link.
 * The `recommendedTags` array contains commonly used accessibility standards like WCAG 2.0, 2.1, and best practices.
 * The `otherTags` array includes additional tags, such as WCAG 2.2 and experimental rules.
 * These tags are used in the FilterModal component to allow users to select accessibility filters for scanning.
 * @author Marie Baker
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 * @lastupdated Dec 11, 2024
 */

/**
 * Interface representing a tag object.
 */
export interface Tag {
  tagName: string;
  tagId: string;
  tagType: string;
  tagLink: string;
  tagDescription: string;
}

/**
 * Recommended accessibility tags.
 */
export const recommendedTags: Tag[] = [
  {
    tagName: 'WCAG 2.0 Level AA',
    tagId: 'wcag2aa',
    tagType: 'recommended',
    tagLink:
      'https://dequeuniversity.com/rules/axe/4.10/#wcag-20-level-a--aa-rules',
    tagDescription:
      'The WCAG 2.0 AA rules are accessibility guidelines designed to make web content accessible to a wider range of users, including those with disabilities.',
  },

  {
    tagName: 'WCAG 2.1 Level AA',
    tagId: 'wcag21aa',
    tagType: 'recommended',
    tagLink:
      'https://dequeuniversity.com/rules/axe/4.10/#wcag-21-level-a--aa-rules',
    tagDescription:
      'The WCAG 2.1 AA rules build on WCAG 2.0 and add additional guidelines to improve web accessibility, particularly for people with cognitive and learning disabilities, as well as users with low vision and mobile device users.',
  },

  {
    tagName: 'Best Practices',
    tagId: 'best-practice',
    tagType: 'recommended',
    tagLink: 'https://dequeuniversity.com/rules/axe/4.10/#best-practices-rules',
    tagDescription:
      'Industry-recognized practices that improve user experience, though they may not strictly follow WCAG success criteria. Typically used in conjunction with WCAG standards to ensure the highest level of accessibility.',
  },
];

/**
 * Other optional accessibility tags.
 */
export const otherTags: Tag[] = [
  {
    tagName: 'WCAG 2.2 Level AA',
    tagId: 'wcag22aa',
    tagType: 'other',
    tagLink:
      'https://dequeuniversity.com/rules/axe/4.10/#wcag-22-level-a--aa-rules',
    tagDescription:
      'WCAG 2.2 AA includes additional guidelines to improve accessibility. These rules are disabled by default, until WCAG 2.2 is more widely adopted and required.',
  },
  {
    tagName: 'Experimental',
    tagId: 'experimental',
    tagType: 'other',
    tagLink: 'https://dequeuniversity.com/rules/axe/4.10/#experimental-rules',
    tagDescription:
      'Experimental rules are in development and may not be fully stable. They are disabled by default in axe-core but can be enabled for testing purposes, offering developers a chance to explore and evaluate potential future accessibility guidelines. These rules should not be used in production environments.',
  },
];
