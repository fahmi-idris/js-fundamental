function getOrder(orderId) {
  return Promise.resolve({ userId: 35 });
}

function getUser(userId) {
  return Promise.resolve({ companyId: 18 });
}

function getCompany(companyId) {
  return Promise.resolve({ name: 'Pluralsight' });
}

function getCourse(courseId) {
  var courses = {
    1: { name: 'course 1' },
    2: { name: 'course 1' },
    3: { name: 'course 1' }
  }
  return Promise.resolve(courses[courseId]);
}