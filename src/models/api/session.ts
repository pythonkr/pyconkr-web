export type APIPretalxSessions = {
  code: string;
  submission_type: {[key: string]: string};
  submission_type_id: number;
  state: string;

  image: string | null;
  title: string;
  abstract: string | null;
  description: string | null;
  notes: string | null;
  internal_notes: string | null;
  content_locale: string;

  slot: {
    start: string | null;
    end: string | null;
    room: {[key: string]: string};
    room_id: number | null;
  } | null;
  duration: number | null;
  do_not_record: boolean;
  is_featured: boolean;

  speakers: {
    code: string;
    name: string;
    biography: string | null;
    avatar: string | null;
    email: string;
  }[];
  answers: {
    id: number;
    question: {
      id: number;
      question: Record<string, unknown>;
      required: boolean;
      target: string;
      options: unknown[];
    };
    answer: string;
    answer_file: string;
    submission: string;
    person: string;
    options: unknown[];
  }[];

  tags: string[];
  tag_ids: number[];
}[]
