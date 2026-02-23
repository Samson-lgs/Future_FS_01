# API Documentation

## Base URL
```
Development: http://localhost:5000/api
Production: https://your-domain.com/api
```

---

## 📧 Contact Endpoints

### Send Contact Message
**POST** `/contact`

Send a message through the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "data": {
    "_id": "abc123",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a project...",
    "status": "new",
    "createdAt": "2026-02-23T10:00:00.000Z"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "errors": [
    {
      "msg": "Valid email is required",
      "param": "email"
    }
  ]
}
```

### Get All Contact Messages
**GET** `/contact`

Retrieve all contact messages (for admin purposes).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "abc123",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "Message content...",
      "status": "new",
      "createdAt": "2026-02-23T10:00:00.000Z"
    }
  ]
}
```

---

## 📁 Projects Endpoints

### Get All Projects
**GET** `/projects`

Retrieve all projects.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "xyz789",
      "title": "Malware Detection System",
      "description": "Advanced ML system for malware detection",
      "technologies": ["Python", "TensorFlow", "Scikit-Learn"],
      "githubLink": "https://github.com/...",
      "liveLink": "https://...",
      "image": "https://...",
      "featured": true,
      "createdAt": "2026-01-15T10:00:00.000Z"
    }
  ]
}
```

### Get Featured Projects
**GET** `/projects/featured`

Retrieve only featured projects.

**Response:**
```json
{
  "success": true,
  "data": [...]
}
```

### Create New Project
**POST** `/projects`

Add a new project.

**Request Body:**
```json
{
  "title": "New Project",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "githubLink": "https://github.com/...",
  "liveLink": "https://...",
  "image": "https://...",
  "featured": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "new123",
    "title": "New Project",
    ...
  }
}
```

### Update Project
**PUT** `/projects/:id`

Update an existing project.

**Request Body:**
```json
{
  "title": "Updated Title",
  "featured": false
}
```

### Delete Project
**DELETE** `/projects/:id`

Delete a project.

**Response:**
```json
{
  "success": true,
  "message": "Project deleted successfully"
}
```

---

## 💬 Messages Endpoints

### Get All Messages
**GET** `/messages`

Get messages with optional filtering.

**Query Parameters:**
- `status` (optional): Filter by status (new, read, replied)
- `limit` (optional): Number of messages to return (default: 50)

**Example:**
```
GET /messages?status=new&limit=10
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

### Update Message Status
**PUT** `/messages/:id/status`

Change the status of a message.

**Request Body:**
```json
{
  "status": "read"
}
```

**Valid Status Values:**
- `new` - Unread message
- `read` - Message has been read
- `replied` - Reply has been sent

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "abc123",
    "status": "read",
    ...
  }
}
```

### Delete Message
**DELETE** `/messages/:id`

Delete a message permanently.

**Response:**
```json
{
  "success": true,
  "message": "Message deleted successfully"
}
```

---

## 🏥 Health Check

### Server Health
**GET** `/health`

Check if the server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

## 🔒 Error Responses

All endpoints may return the following error response:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (development only)"
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `201` - Created successfully
- `400` - Bad request / Validation error
- `404` - Resource not found
- `500` - Server error

---

## 📝 Notes

1. **CORS**: The API accepts requests from `http://localhost:3000` in development
2. **Validation**: All inputs are validated and sanitized
3. **Email**: Contact form automatically sends email notifications if configured
4. **Database**: All data is persisted in MongoDB

---

## 🧪 Testing with cURL

### Test Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message"
  }'
```

### Get Projects
```bash
curl http://localhost:5000/api/projects
```

### Check Server Health
```bash
curl http://localhost:5000/api/health
```

---

For more information, refer to the main [README.md](README.md)
