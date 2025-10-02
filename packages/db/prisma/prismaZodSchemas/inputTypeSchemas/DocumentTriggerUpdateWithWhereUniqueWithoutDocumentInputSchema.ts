import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereUniqueInputSchema } from './DocumentTriggerWhereUniqueInputSchema';
import { DocumentTriggerUpdateWithoutDocumentInputSchema } from './DocumentTriggerUpdateWithoutDocumentInputSchema';
import { DocumentTriggerUncheckedUpdateWithoutDocumentInputSchema } from './DocumentTriggerUncheckedUpdateWithoutDocumentInputSchema';

export const DocumentTriggerUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateWithWhereUniqueWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => DocumentTriggerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DocumentTriggerUpdateWithoutDocumentInputSchema), z.lazy(() => DocumentTriggerUncheckedUpdateWithoutDocumentInputSchema) ]),
});

export default DocumentTriggerUpdateWithWhereUniqueWithoutDocumentInputSchema;
