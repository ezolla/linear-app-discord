export interface IncomingLinearWebhookPayload {
  action: 'create' | 'update' | 'remove';
  data: Data;
  type: string;
  createdAt: string;
  updatedFrom?: UpdatedFrom;
  url: string;
}

export interface Data {
  id: string;
  title?: string;
  subscriberIds?: string[];
  previousIdentifiers?: any[];
  createdAt: string;
  updatedAt: string;
  archivedAt: any;
  number?: number;
  description?: string;
  documentVersion?: number;
  priority?: number;
  estimate: any;
  boardOrder?: number;
  startedAt: any;
  completedAt: any;
  canceledAt: any;
  autoClosedAt: any;
  autoArchivedAt: any;
  dueDate: any;
  labelIds?: string[];
  teamId?: string;
  cycleId?: string;
  projectId?: string;
  creatorId?: string;
  assigneeId?: string;
  stateId?: string;
  parentId: any;
  source?: string;
  priorityLabel?: string;
  labels?: Label[];
  team?: Team;
  state?: State;
  body?: string;
  edited?: boolean;
  issueId?: string;
  userId?: string;
}

export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface Team {
  id: string;
  name: string;
  key: string;
}

export interface State {
  id: string;
  name: string;
  color: string;
  description: any;
  type: string;
}

export interface UpdatedFrom {
  updatedAt: string;
  labelIds?: any[];
  priorityLabel: string;
  labels: any[];
  priority?: number;
}
