export interface Sujet {
    id: number;
    content: string;
    forum_id: number;
    user_id: number;
    message_received: number,
    created_at: string;
  }


// export interface Topic {
//   id: number;
//   content: string;
//   user_id: number;
//   forum_id: number;
//   domain: string;
//   creation_date: string;
//   message_count: number;
// }