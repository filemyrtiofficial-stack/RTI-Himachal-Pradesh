/**
 * Himachal Pradesh Departments organized by sections
 * Used for RTI department listing page
 * Structure matches Telangana/Delhi format for consistent rendering
 */

export interface JammuAndKashmirDepartmentSection {
  category: string;
  items: string[];
}

// Alias for Rajasthan (using same structure as Himachal Pradesh)
export type DepartmentSection = JammuAndKashmirDepartmentSection;

export const jammuAndKashmirDepartments: JammuAndKashmirDepartmentSection[] = [
  {
    category: 'RTI Himachal Pradesh General Administration & Core',
    items: [
      'RTI Himachal Pradesh General Administration Department',
      'RTI Himachal Pradesh Home Department',
      'RTI Himachal Pradesh Police Department',
      'RTI Himachal Pradesh Law Department',
      'RTI Himachal Pradesh Election Department',
      'RTI Himachal Pradesh Finance Department',
      'RTI Himachal Pradesh Planning Department',
      'RTI Himachal Pradesh Revenue Department',
      'RTI Himachal Pradesh Registration & Stamps Department',
      'RTI Himachal Pradesh Public Works Department',
      'RTI Himachal Pradesh Transport Department'
    ]
  },
  {
    category: 'RTI Himachal Pradesh Education & Health',
    items: [
      'RTI Himachal Pradesh Education Department',
      'RTI Himachal Pradesh Higher Education Department',
      'RTI Himachal Pradesh Technical Education Department',
      'RTI Himachal Pradesh Health & Family Welfare Department',
      'RTI Himachal Pradesh Youth Services & Sports Department'
    ]
  },
  {
    category: 'RTI Himachal Pradesh Agriculture & Allied',
    items: [
      'RTI Himachal Pradesh Agriculture Department',
      'RTI Himachal Pradesh Horticulture Department',
      'RTI Himachal Pradesh Animal Husbandry Department',
      'RTI Himachal Pradesh Fisheries Department'
    ]
  },
  {
    category: 'RTI Himachal Pradesh Forest, Environment & Water',
    items: [
      'RTI Himachal Pradesh Forests Department',
      'RTI Himachal Pradesh Environment, Science & Technology Department',
      'RTI Himachal Pradesh Water Resources Department',
      'RTI Himachal Pradesh Irrigation & Public Health Department'
    ]
  },
  {
    category: 'RTI Himachal Pradesh Energy & Supplies',
    items: [
      'RTI Himachal Pradesh Energy Department',
      'RTI Himachal Pradesh Food, Civil Supplies & Consumer Affairs Department'
    ]
  },
  {
    category: 'RTI Himachal Pradesh Social Welfare & Development',
    items: [
      'RTI Himachal Pradesh Social Justice & Empowerment Department',
      'RTI Himachal Pradesh Women & Child Development Department',
      'RTI Himachal Pradesh Tribal Development Department',
      'RTI Himachal Pradesh Scheduled Castes Development Department'
    ]
  },
  {
    category: 'RTI Himachal Pradesh Youth, Culture & Tourism',
    items: [
      'RTI Himachal Pradesh Youth Services & Sports Department',
      'RTI Himachal Pradesh Language, Art & Culture Department',
      'RTI Himachal Pradesh Tourism & Civil Aviation Department',
      'RTI Himachal Pradesh Tourism Department'
    ]
  },
  {
    category: 'RTI Himachal Pradesh Industries & Labour',
    items: [
      'RTI Himachal Pradesh Industries Department',
      'RTI Himachal Pradesh Labour & Employment Department'
    ]
  },
  {
    category: 'RTI Himachal Pradesh Administration & Governance',
    items: [
      'RTI Himachal Pradesh Disaster Management Department',
      'RTI Himachal Pradesh Personnel, Administrative Reforms & Rajbhasha Department',
      'RTI Himachal Pradesh Planning, Economics & Statistics Department',
      'RTI Himachal Pradesh Information & Public Relations Department',
      'RTI Himachal Pradesh Digital Technologies & Governance Department',
      'RTI Himachal Pradesh Archives Department',
      'RTI Himachal Pradesh Urban Development Department',
      'RTI Himachal Pradesh Rural Development & Panchayati Raj Department'
    ]
  }
];

// Export for Rajasthan (using Himachal Pradesh structure for now)
export const rajasthanDepartments: DepartmentSection[] = jammuAndKashmirDepartments;

