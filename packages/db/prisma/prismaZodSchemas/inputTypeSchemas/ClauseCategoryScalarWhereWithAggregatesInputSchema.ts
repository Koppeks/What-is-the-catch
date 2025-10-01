import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ClauseCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClauseCategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClauseCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => ClauseCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseCategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => ClauseCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  version: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  defaultScoring: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  triggerInstruction: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  triggerKeywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseCategoryScalarWhereWithAggregatesInput>;

export default ClauseCategoryScalarWhereWithAggregatesInputSchema;
