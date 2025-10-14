import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TriggerOrderByRelationAggregateInputSchema } from './TriggerOrderByRelationAggregateInputSchema';

export const ClauseCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.ClauseCategoryOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  defaultScoring: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  triggerInstruction: z.lazy(() => SortOrderSchema).optional(),
  triggerKeywords: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Trigger: z.lazy(() => TriggerOrderByRelationAggregateInputSchema).optional(),
});

export default ClauseCategoryOrderByWithRelationInputSchema;
