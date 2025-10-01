import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerKeyStateCompoundUniqueInputSchema } from './TriggerKeyStateCompoundUniqueInputSchema';
import { TriggerWhereInputSchema } from './TriggerWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { EnumTriggerSourceFilterSchema } from './EnumTriggerSourceFilterSchema';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { EnumTriggerStateFilterSchema } from './EnumTriggerStateFilterSchema';
import { TriggerStateSchema } from './TriggerStateSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumSeverityNullableFilterSchema } from './EnumSeverityNullableFilterSchema';
import { SeveritySchema } from './SeveritySchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TriggerNullableScalarRelationFilterSchema } from './TriggerNullableScalarRelationFilterSchema';
import { TriggerListRelationFilterSchema } from './TriggerListRelationFilterSchema';
import { ClauseCategoryScalarRelationFilterSchema } from './ClauseCategoryScalarRelationFilterSchema';
import { ClauseCategoryWhereInputSchema } from './ClauseCategoryWhereInputSchema';
import { TriggerHitListRelationFilterSchema } from './TriggerHitListRelationFilterSchema';
import { DocumentTriggerListRelationFilterSchema } from './DocumentTriggerListRelationFilterSchema';

export const TriggerWhereUniqueInputSchema: z.ZodType<Prisma.TriggerWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    key: z.string(),
    key_state: z.lazy(() => TriggerKeyStateCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
    key: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    key_state: z.lazy(() => TriggerKeyStateCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    key: z.string(),
    key_state: z.lazy(() => TriggerKeyStateCompoundUniqueInputSchema),
  }),
  z.object({
    key: z.string(),
  }),
  z.object({
    key_state: z.lazy(() => TriggerKeyStateCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  key: z.string().optional(),
  key_state: z.lazy(() => TriggerKeyStateCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TriggerWhereInputSchema),z.lazy(() => TriggerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TriggerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TriggerWhereInputSchema),z.lazy(() => TriggerWhereInputSchema).array() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  patterns: z.lazy(() => StringNullableListFilterSchema).optional(),
  source: z.union([ z.lazy(() => EnumTriggerSourceFilterSchema),z.lazy(() => TriggerSourceSchema) ]).optional(),
  state: z.union([ z.lazy(() => EnumTriggerStateFilterSchema),z.lazy(() => TriggerStateSchema) ]).optional(),
  mergedIntoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reviewNotes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  promotedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  clauseCategoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  defaultSeverity: z.union([ z.lazy(() => EnumSeverityNullableFilterSchema),z.lazy(() => SeveritySchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mergedInto: z.union([ z.lazy(() => TriggerNullableScalarRelationFilterSchema),z.lazy(() => TriggerWhereInputSchema) ]).optional().nullable(),
  mergeFrom: z.lazy(() => TriggerListRelationFilterSchema).optional(),
  clauseCategory: z.union([ z.lazy(() => ClauseCategoryScalarRelationFilterSchema),z.lazy(() => ClauseCategoryWhereInputSchema) ]).optional(),
  hits: z.lazy(() => TriggerHitListRelationFilterSchema).optional(),
  documentRules: z.lazy(() => DocumentTriggerListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.TriggerWhereUniqueInput>;

export default TriggerWhereUniqueInputSchema;
