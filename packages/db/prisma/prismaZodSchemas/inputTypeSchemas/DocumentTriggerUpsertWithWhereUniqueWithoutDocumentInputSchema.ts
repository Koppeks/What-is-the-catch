import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerUpdateWithoutDocumentInputSchema } from './DocumentTriggerUpdateWithoutDocumentInputSchema';
import { DocumentTriggerUncheckedUpdateWithoutDocumentInputSchema } from './DocumentTriggerUncheckedUpdateWithoutDocumentInputSchema';
import { DocumentTriggerCreateWithoutDocumentInputSchema } from './DocumentTriggerCreateWithoutDocumentInputSchema';
import { DocumentTriggerUncheckedCreateWithoutDocumentInputSchema } from './DocumentTriggerUncheckedCreateWithoutDocumentInputSchema';

export const DocumentTriggerUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerUpsertWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => DocumentTriggerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DocumentTriggerUpdateWithoutDocumentInputSchema),z.lazy(() => DocumentTriggerUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentTriggerCreateWithoutDocumentInputSchema),z.lazy(() => DocumentTriggerUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentTriggerUpsertWithWhereUniqueWithoutDocumentInput>;

export default DocumentTriggerUpsertWithWhereUniqueWithoutDocumentInputSchema;
