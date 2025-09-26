import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  defaultScoring: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  triggerInstruction: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseTypeMaxOrderByAggregateInput>;

export default ClauseTypeMaxOrderByAggregateInputSchema;
