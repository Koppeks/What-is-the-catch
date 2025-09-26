import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseTypeWhereInputSchema } from './ClauseTypeWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TriggerListRelationFilterSchema } from './TriggerListRelationFilterSchema';

export const ClauseTypeWhereUniqueInputSchema: z.ZodType<Prisma.ClauseTypeWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    slug: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => ClauseTypeWhereInputSchema),z.lazy(() => ClauseTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseTypeWhereInputSchema),z.lazy(() => ClauseTypeWhereInputSchema).array() ]).optional(),
  version: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  defaultScoring: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  triggerInstruction: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  triggerKeywords: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Trigger: z.lazy(() => TriggerListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.ClauseTypeWhereUniqueInput>;

export default ClauseTypeWhereUniqueInputSchema;
