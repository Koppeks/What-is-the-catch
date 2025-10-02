import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerScalarWhereInputSchema } from './DocumentTriggerScalarWhereInputSchema';
import { DocumentTriggerUpdateManyMutationInputSchema } from './DocumentTriggerUpdateManyMutationInputSchema';
import { DocumentTriggerUncheckedUpdateManyWithoutDocumentInputSchema } from './DocumentTriggerUncheckedUpdateManyWithoutDocumentInputSchema';

export const DocumentTriggerUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateManyWithWhereWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => DocumentTriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DocumentTriggerUpdateManyMutationInputSchema), z.lazy(() => DocumentTriggerUncheckedUpdateManyWithoutDocumentInputSchema) ]),
});

export default DocumentTriggerUpdateManyWithWhereWithoutDocumentInputSchema;
