import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutDocumentRulesInputSchema } from './DocumentUpdateWithoutDocumentRulesInputSchema';
import { DocumentUncheckedUpdateWithoutDocumentRulesInputSchema } from './DocumentUncheckedUpdateWithoutDocumentRulesInputSchema';

export const DocumentUpdateToOneWithWhereWithoutDocumentRulesInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutDocumentRulesInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutDocumentRulesInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutDocumentRulesInputSchema) ]),
});

export default DocumentUpdateToOneWithWhereWithoutDocumentRulesInputSchema;
