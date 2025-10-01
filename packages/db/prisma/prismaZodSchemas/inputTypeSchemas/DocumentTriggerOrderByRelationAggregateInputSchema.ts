import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentTriggerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DocumentTriggerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerOrderByRelationAggregateInput>;

export default DocumentTriggerOrderByRelationAggregateInputSchema;
