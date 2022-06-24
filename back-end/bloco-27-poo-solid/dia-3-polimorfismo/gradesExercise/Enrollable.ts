export default interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}