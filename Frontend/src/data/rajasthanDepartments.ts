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
    category: 'RTI Himachal Pradesh General Administration Department',
    items: [
      'RTI Himachal Pradesh General Administration Department',
      'RTI Himachal Pradesh Home Department',
      'RTI Himachal Pradesh Police Department',
      'RTI Himachal Pradesh Agriculture Department',
      'RTI Himachal Pradesh Law Department',
      'RTI Himachal Pradesh Agriculture Department',
      'RTI Himachal Pradesh Election Department',
    ]},
  {
    category: 'RTI Himachal Pradesh Finance Department',
    items: [
      'RTI Himachal Pradesh Finance Department',
      'RTI Himachal Pradesh Planning Department',
      'RTI Himachal Pradesh Revenue Department',
      'RTI Himachal Pradesh Excise & Taxation Department',
      'RTI Himachal Pradesh Registration & Stamps Department',
      'RTI Himachal Pradesh Agriculture Department',
      'RTI Himachal Pradesh Agriculture Department',
    ]},
  {
    category: 'RTI Himachal Pradesh Education Department',
    items: [
      'RTI Himachal Pradesh Education Department',
      'RTI Himachal Pradesh Higher Education Department',
      'RTI Himachal Pradesh Technical Education Department',
      'RTI Himachal Pradesh Youth Services & Sports Department',
    ]},
  {
    category: 'RTI Himachal Pradesh Health & Medical Services',
    items: [
      'RTI Himachal Pradesh Health & Family Welfare Department',
    ]},
  {
    category: 'RTI Himachal Pradesh Infrastructure & Development',
    items: [
      'RTI Himachal Pradesh Public Works Department',
      'RTI Himachal Pradesh Urban Development Department',
      'RTI Himachal Pradesh Transport Department',
      'RTI Himachal Pradesh Rural Development & Panchayati Raj Department',
      'RTI Himachal Pradesh Rural Development & Panchayati Raj Department',
    ]},
  {
    category: 'RTI Himachal Pradesh Agriculture & Rural Economy',
    items: [
      'RTI Himachal Pradesh Horticulture Department',
      'RTI Himachal Pradesh Animal Husbandry Department',
    ]},
  {
    category: 'RTI Himachal Pradesh Industries, Commerce & Tourism',
    items: [
      'RTI Himachal Pradesh Tourism Department',
    ]},
  {
    category: 'RTI Himachal Pradesh Environment & Forest',
    items: []
  },
  {
    category: 'RTI Himachal Pradesh Social Welfare & Employment',
    items: [
      'RTI Himachal Pradesh Labour & Employment Department',
    ]},
  {
    category: 'RTI Himachal Pradesh Information Technology & Culture',
    items: [
      'RTI Himachal Pradesh Information Technology Department',
      'RTI Himachal Pradesh Information & Public Relations Department',
    ]}];

// Export for Rajasthan (using Himachal Pradesh structure for now)
export const rajasthanDepartments: DepartmentSection[] = jammuAndKashmirDepartments;

