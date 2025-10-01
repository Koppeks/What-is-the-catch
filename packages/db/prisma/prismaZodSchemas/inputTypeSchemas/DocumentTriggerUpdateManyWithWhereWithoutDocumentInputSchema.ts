import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerScalarWhereInputSchema } from './DocumentTriggerScalarWhereInputSchema';
import { DocumentTriggerUpdateManyMutationInputSchema } from './DocumentTriggerUpdateManyMutationInputSchema';
import { DocumentTriggerUncheckedUpdateManyWithoutDocumentInputSchema } from './DocumentTriggerUncheckedUpdateManyWithoutDocumentInputSchema';

export const DocumentTriggerUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateManyWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => DocumentTriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DocumentTriggerUpdateManyMutationInputSchema),z.lazy(() => DocumentTriggerUncheckedUpdateManyWithoutDocumentInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentTriggerUpdateManyWithWhereWithoutDocumentInput>;

export default DocumentTriggerUpdateManyWithWhereWithoutDocumentInputSchema;
