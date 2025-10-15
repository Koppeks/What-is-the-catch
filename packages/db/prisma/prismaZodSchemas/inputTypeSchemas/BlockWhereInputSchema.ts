import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumBlockKindFilterSchema } from './EnumBlockKindFilterSchema';
import { BlockKindSchema } from './BlockKindSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DocumentScalarRelationFilterSchema } from './DocumentScalarRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { SectionScalarRelationFilterSchema } from './SectionScalarRelationFilterSchema';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';
import { SectionListRelationFilterSchema } from './SectionListRelationFilterSchema';

export const BlockWhereInputSchema: z.ZodType<Prisma.BlockWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BlockWhereInputSchema), z.lazy(() => BlockWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlockWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlockWhereInputSchema), z.lazy(() => BlockWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sectionId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  kind: z.union([ z.lazy(() => EnumBlockKindFilterSchema), z.lazy(() => BlockKindSchema) ]).optional(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  ordinalPath: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  html: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  anchor: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  document: z.union([ z.lazy(() => DocumentScalarRelationFilterSchema), z.lazy(() => DocumentWhereInputSchema) ]).optional(),
  section: z.union([ z.lazy(() => SectionScalarRelationFilterSchema), z.lazy(() => SectionWhereInputSchema) ]).optional(),
  Section: z.lazy(() => SectionListRelationFilterSchema).optional(),
});

export default BlockWhereInputSchema;
