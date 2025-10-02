import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentTriggerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DocumentTriggerOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default DocumentTriggerOrderByRelationAggregateInputSchema;
